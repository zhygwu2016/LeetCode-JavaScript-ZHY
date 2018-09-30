/*
157. Read N Characters Given Read4
https://leetcode.com/problems/read-n-characters-given-read4/description/

The API: 'int read4(char *buf)' reads 4 characters at a time from a file.

The return value is the actual number of characters read.
For example, it returns 3 if there is only 3 characters left in the file.

By using the read4 API, implement the function int read(char *buf, int n)
that reads n characters from the file.

Example 1:
Input: buf = "abc", n = 4
Output: "abc"
Explanation: The actual number of characters read is 3, which is "abc".

Example 2:
Input: buf = "abcde", n = 5
Output: "abcde"

Note:
The read function will only be called once for each test case.
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

// https://leetcode.com/problems/read-n-characters-given-read4/discuss/49496/Another-accepted-Java-solution
// https://leetcode.com/problems/read-n-characters-given-read4/discuss/49501/What-is-the-objective-of-this-question
// https://leetcode.com/problems/read-n-characters-given-read4/discuss/49535/General-Java-Solution-and-Explanation-with-Examples
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
    return function(buf, n) {
      // ↓↓↓ temp buffer
      // 相当于Java下： char[] tmp = new char[4];
      var tmp=[];
      for(var j=0;j<4;j++){
        tmp.push('');
      }

      var readBytes = 0;  // total bytes have read
      var eof = false; // end of file flag
      while(!eof && readBytes<n){
        //var sz = read4(buffer);
        var sz = read4(tmp);

        // check if it's the end of the file
        eof = (sz<4);

        var bytes = Math.min(n-readBytes,sz);

        // copy from temp buffer to buf
        for (var i = 0; i < bytes; i++) {
          buf[readBytes++] = tmp[i];
        }
        //readBytes += bytes;
      }
      return readBytes;
    };
};
