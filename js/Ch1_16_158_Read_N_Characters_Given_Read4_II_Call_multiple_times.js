/*
158. Read N Characters Given Read4 II - Call multiple times
https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/description/

The API: int read4(char *buf) reads 4 characters at a time from a file.
The return value is the actual number of characters read.
For example, it returns 3 if there is only 3 characters left in the file.

By using the read4 API, implement the function int read(char *buf, int n)
that reads n characters from the file.

Note:
The read function may be called multiple times.

Example 1:
Given buf = "abc"
read("abc", 1) // returns "a"
read("abc", 2); // returns "bc"
read("abc", 1); // returns ""

Example 2:
Given buf = "abc"
read("abc", 4) // returns "abc"
read("abc", 1); // returns ""
*/
/*
Solution:
This makes the problem a lot more complicated, because it can be called multiple times
and involves storing states.
Therefore, we design the following class member variables to store the states:
i. buffer – An array of size 4 use to store data returned by read4 temporarily. If
the characters were read into the buffer and were not used partially, they will
be used in the next call.
ii. offset – Use to keep track of the offset index where the data begins in the next
read call. The buffer could be read partially (due to constraints of reading up
to n bytes) and therefore leaving some data behind.
iii. bufsize – The real buffer size that stores the actual data. If bufsize > 0, that
means there is partial data left in buffer from the last read call and we should
consume it before calling read4 again. On the other hand, if bufsize == 0, it
means there is no data left in buffer.
This problem is a very good coding exercise. Coding it correctly is extremely tricky due
to the amount of edge cases to consider.
*/

/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
  var buffer=[];
  for(var j=0;j<4;j++){
    buffer.push('');
  }

  var offset = 0;
  var bufSize =0;
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
    return function(buf, n) {
      var readBytes = 0;  // total bytes have read
      var eof = false; // end of file flag
      while(!eof && readBytes<n){
        if (bufSize==0){
          bufSize = read4(buffer);
          eof = (bufSize<4);
        }
        /*If bufsize > 0, that
        means there is partial data left in buffer from the last read call and we should
        consume it before calling read4 again. On the other hand, if bufsize == 0, it
        means there is no data left in buffer.*/
        
        var bytes = Math.min(n-readBytes,bufSize);

        // copy from buffer to buf
        for (var i = offset; i < (offset+bytes); i++) {
          buf[readBytes++] = buffer[i];
        }
        offset = (offset + bytes) % 4;
        bufSize -= bytes;
      }
      return readBytes;
    };
};
