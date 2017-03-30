// function PageNavigation(len,pageNum){
//    this.len = len; //存储总页码
//    this.pageNum = pageNum;//存储页码
//    this.init();
// }
// PageNavigation.prototype = {
//   init: function(){
//     this.pageClick();
//   },
//   //生成页码列表
//   pageHtml: function(){
//        var html = '';
//        if(this.pageNum == 1){
//           html = '<li class="prev disabled" ><a href="#" aria-label="Previous" class="prev"><span aria-hidden="true">&laquo;</span></a></li>';
//         }else{
//             html = '<li class="prev"><a href="#" aria-label="Previous" class="prev"><span aria-hidden="true">&laquo;</span></a></li>';
//         }
//       if(this.pageNum){
//         if(this.pageNum <5 ){
//          for(var i = 1; i<=this.len; i++){
//             if(i == this.pageNum){
//               html += '<li class="active"><a href="#">'+ this.pageNum +'</a></li>';
//             }
//             else if(i <= 5){
//               html += '<li><a href="#">'+ i +'</a></li>';
//             }else if(i>=5){
//               html += '<li class="noClick"><a href="#">......</a></li>'
//               html += '<li><a href="#">'+ (this.len-1)+'</a></li>'
//               html += '<li><a href="#">'+ (this.len)+'</a></li>'
//               break;
//             }
//            }
//         }else if(this.pageNum >= 5 && this.pageNum <= 6){
//         for(j = 1; j<=this.pageNum; j++){
//           if(j == this.pageNum){
//             html += '<li class="active"><a href="#">'+ this.pageNum +'</a></li>';

//           }else {
//             html += '<li><a href="#">'+ j +'</a></li>';
//           }
//           }
//           html += '<li><a href="#">'+ (this.pageNum+1) +'</a></li>';
//           html += '<li class="noClick"><a href="#">......</a></li>'
//           html += '<li><a href="#">'+ (this.len-1)+'</a></li>'
//           html += '<li><a href="#">'+ (this.len)+'</a></li>'
//         }else if(this.pageNum >=7 && this.pageNum < this.len-5){
//           html += '<li><a href="#">1</a></li>';
//           html += '<li><a href="#">2</a></li>';
//           html += '<li class="noClick"><a href="#">......</a></li>';
//           for(k = this.pageNum-2; k<=this.pageNum+2; k++){
//             if(k == this.pageNum){
//               html += '<li class="active"><a href="#">'+ this.pageNum +'</a></li>';
//             }else {
//               html += '<li><a href="#">'+ k +'</a></li>';
//             }
//           }
//           html += '<li class="noClick"><a href="#">......</a></li>'
//           html += '<li><a href="#">'+ (this.len-1)+'</a></li>'
//           html += '<li><a href="#">'+ (this.len)+'</a></li>'

//         }else if(this.pageNum >= this.len-5 ){
//             html += '<li><a href="#">1</a></li>';
//             html += '<li><a href="#">2</a></li>';
//             html += '<li class="noClick"><a href="#">......</a></li>';
//             for(var h = this.len-5; h<=this.len; h++){
//               if(h == this.pageNum){
//                   html += '<li class="active"><a href="#">'+ this.pageNum +'</a></li>';
//               }else{
//                  html += '<li><a href="#">'+ h +'</a></li>';
//               }
//           }
//         }
//       }else{
//          for(var i = 1; i<=this.len; i++){
//           if(i == 1){
//             html += '<li class="active"><a href="#">'+ i +'</a></li>';
//           }
//         if(i <= 5 && i != 1){
//           html += '<li><a href="#">'+ i +'</a></li>';
//         }else if(i>=5){
//           html += '<li class="noClick"><a href="#">......</a></li>'
//           html += '<li><a href="#">'+ (this.len-1)+'</a></li>'
//           html += '<li><a href="#">'+ (this.len)+'</a></li>'
//           break;
//         }
//        }
//       }
//     if(this.pageNum == this.len){
//       html += '<li class="next disabled"><a href="#" aria-label="Next" class="next"><span aria-hidden="true">&raquo;</span></a></li>'
//     }else {
//       html += '<li class="next"><a href="#" aria-label="Next" class="next"><span aria-hidden="true">&raquo;</span></a></li>'
//     }
//     return html;
//   },
// //给页码注册点击事件
//   pageClick: function(){
//       var that = this;
//       $('.pagination').on('click', function(e){
//           var ele = $(e.target).parent();
//         if(ele.hasClass('noClick')){//点击中间生成省略号的标签时不做任何操作
//           return
//         }else if(ele.hasClass('next')){//点击下一页的时候
//               if(that.pageNum == that.len) return
//               that.pageNum = that.pageNum++ >= that.len? that.len: that.pageNum;

//               var html = that.pageHtml(10, that.pageNum);
//               $('.pagination').html(html);

//           }else if(ele.hasClass('prev')){ //点击上一页
//               if(that.pageNum == 1) return
//               that.pageNum = that.pageNum-- <= 1? 1:that.pageNum;
//               var html = that.pageHtml(10, that.pageNum);
//               $('.pagination').html(html);
//           }else {//点击每一个具体页
//               that.pageNum = parseInt($(e.target).html());//获取页码
//               var html = that.pageHtml(that.len,that.pageNum );
//               $('.pagination').html(html);
//               // that.pageNum = num;
//           }
//       });
//   }
// }
function PageNavigation(obj, len, pageNum) {
    this.len = len; //存储总页码
    this.obj = obj;
    this.pageNum = pageNum;//存储页码
    this.init();
}
PageNavigation.prototype = {
    init: function () {
        var pageHtml = this.pageHtml();
        this.obj.find('.pagination').html(pageHtml);
        this.pageClick();
    },
    //生成页码列表
    pageHtml: function () {
        var html = '';
        if (this.pageNum == 1) {
            html = '<li class="prev disabled" ><a href="#" aria-label="Previous" class="prev"><span aria-hidden="true">&laquo;</span></a></li>';
        } else {
            html = '<li class="prev"><a href="#" aria-label="Previous" class="prev"><span aria-hidden="true">&laquo;</span></a></li>';
        }
        if (this.pageNum) {
            if (this.pageNum < 5) {
                for (var i = 1; i <= this.len; i++) {
                    if (i == this.pageNum) {
                        html += '<li class="active"><a href="#">' + this.pageNum + '</a></li>';
                    }
                    else if (i <= 5) {
                        html += '<li><a href="#">' + i + '</a></li>';
                    } else if (i >= 5) {
                        html += '<li class="noClick"><a href="#">......</a></li>'
                        html += '<li><a href="#">' + (this.len - 1) + '</a></li>'
                        html += '<li><a href="#">' + (this.len) + '</a></li>'
                        break;
                    }
                }
            } else if (this.pageNum >= 5 && this.pageNum <= 6) {
                for (j = 1; j <= this.pageNum; j++) {
                    if (j == this.pageNum) {
                        html += '<li class="active"><a href="#">' + this.pageNum + '</a></li>';

                    } else {
                        html += '<li><a href="#">' + j + '</a></li>';
                    }
                }
                html += '<li><a href="#">' + (this.pageNum + 1) + '</a></li>';
                html += '<li class="noClick"><a href="#">......</a></li>'
                html += '<li><a href="#">' + (this.len - 1) + '</a></li>'
                html += '<li><a href="#">' + (this.len) + '</a></li>'
            } else if (this.pageNum >= 7 && this.pageNum < this.len - 5) {
                html += '<li><a href="#">1</a></li>';
                html += '<li><a href="#">2</a></li>';
                html += '<li class="noClick"><a href="#">......</a></li>';
                for (k = this.pageNum - 2; k <= this.pageNum + 2; k++) {
                    if (k == this.pageNum) {
                        html += '<li class="active"><a href="#">' + this.pageNum + '</a></li>';
                    } else {
                        html += '<li><a href="#">' + k + '</a></li>';
                    }
                }
                html += '<li class="noClick"><a href="#">......</a></li>'
                html += '<li><a href="#">' + (this.len - 1) + '</a></li>'
                html += '<li><a href="#">' + (this.len) + '</a></li>'

            } else if (this.pageNum >= this.len - 5) {
                html += '<li><a href="#">1</a></li>';
                html += '<li><a href="#">2</a></li>';
                html += '<li class="noClick"><a href="#">......</a></li>';
                for (var h = this.len - 5; h <= this.len; h++) {
                    if (h == this.pageNum) {
                        html += '<li class="active"><a href="#">' + this.pageNum + '</a></li>';
                    } else {
                        html += '<li><a href="#">' + h + '</a></li>';
                    }
                }
            }
        } else {
            for (var i = 1; i <= this.len; i++) {
                if (i == 1) {
                    html += '<li class="active"><a href="#">' + i + '</a></li>';
                }
                if (i <= 5 && i != 1) {
                    html += '<li><a href="#">' + i + '</a></li>';
                } else if (i >= 5) {
                    html += '<li class="noClick"><a href="#">......</a></li>'
                    html += '<li><a href="#">' + (this.len - 1) + '</a></li>'
                    html += '<li><a href="#">' + (this.len) + '</a></li>'
                    break;
                }
            }
        }
        if (this.pageNum == this.len) {
            html += '<li class="next disabled"><a href="#" aria-label="Next" class="next"><span aria-hidden="true">&raquo;</span></a></li>'
        } else {
            html += '<li class="next"><a href="#" aria-label="Next" class="next"><span aria-hidden="true">&raquo;</span></a></li>'
        }
        return html;
    },
//给页码注册点击事件
    pageClick: function () {
        var that = this;
        this.obj.find('.pagination').on('click', function (e) {
            var ele = $(e.target).parent();
            if (ele.hasClass('noClick')) {//点击中间生成省略号的标签时不做任何操作
                return
            } else if (ele.hasClass('next')) {//点击下一页的时候
                if (that.pageNum == that.len) return
                that.pageNum = that.pageNum++ >= that.len ? that.len : that.pageNum;

                var html = that.pageHtml(10, that.pageNum);
                that.obj.find('.pagination').html(html);

            } else if (ele.hasClass('prev')) { //点击上一页
                if (that.pageNum == 1) return
                that.pageNum = that.pageNum-- <= 1 ? 1 : that.pageNum;
                var html = that.pageHtml(10, that.pageNum);
                that.obj.find('.pagination').html(html);
            } else {//点击每一个具体页
                that.pageNum = parseInt($(e.target).html());//获取页码
                var html = that.pageHtml(that.len, that.pageNum);
                that.obj.find('.pagination').html(html);
                // that.pageNum = num;
            }
        });
    }
}
