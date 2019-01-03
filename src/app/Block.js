/* ===== Block Class ===================================
|  Class with a constructor for block data model       |
|  ====================================================*/

class Block {
    constructor(data){
      this.height = '';
      this.time = 0;
      this.body = data;
      this.previousBlockHash = '';
      this.hash = '';
    }
  }
  
module.exports = Block;