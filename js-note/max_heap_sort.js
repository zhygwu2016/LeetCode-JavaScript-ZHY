// https://godbasin.github.io/2017/07/23/heap-sort/

function swap(arr, a, b) {
  if (a == b) { return; }
  var c = arr[a];
  arr[a] = arr[b];
  arr[b] = c;
}

function maxHeapify(Arr, i, size) {
  var l = 2 * i + 1, r = 2 * i + 2; // 左子节点为2i + 1，右子节点为2i + 2
  var largest = i;
  // 若子节点比节点大，则标记
  if (l <= size && Arr[l] > Arr[largest]) {
    largest = l;
  }
  if (r <= size && Arr[r] > Arr[largest]) {
    largest = r;
  }
  // 若标记有子节点，则交换父子位置，并递归计算
  if (largest !== i) {
    swap(Arr, i, largest);
    maxHeapify(Arr, largest, size);
  }
}

function heapSort(iArr) {
  var n = iArr.length;
  // 若只有一个或者没有，则返回
  if (n <= 1) { return iArr; }
  // 若有多个，则建最大堆
  else {
      // 建堆（Build-Max-Heap）
      for (var i = Math.floor(n / 2); i >= 0; i--) {
          maxHeapify(iArr, i, n);
      }
      // 堆排序
      for (var j = 0; j < n; j++) {
          swap(iArr, 0, n - 1 - j);
          maxHeapify(iArr, 0, n - 2 - j);
      }
      return iArr;
  }
}

heapSort([5, 2, 4, 6, 1, 3]); 
