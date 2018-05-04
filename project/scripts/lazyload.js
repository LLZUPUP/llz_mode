var LazyLoadImage = (function(){
    return {
        setSrc: function(ele) {
            // console.log('开始下载图片吧');
            const url = ele.getAttribute("origin_src")?
            ele.getAttribute("origin_src"):"";
            if(!url) return;
            const oImg = document.createElement("img");
            // 不会影响页面,none会离开文档流
            // opacity: 0 这个会撑长页面
            oImg.style.display = 'none';
            document.body.appendChild(oImg);
            oImg.src=url;
            // console.log(url);
            // 异步
            oImg.onload = function() {
                ele.style.backgroundImage = `url(${url})`;
                document.body.removeChild(this);
                // 不会立即执行
                // 后执行
            }
            // 先执行
            

        }
    }
 })();