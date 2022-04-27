const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target')
const tag = document.querySelector('.tag');

//addEventListener 이용해서 윈도우가 load가 될때 아래 내용을 처리해 줄수있도록 윈도우 로드 되면 그떄 target에 
//크기를 읽어와서
addEventListener('load', () => {

    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;
    
    document.addEventListener('mousemove', event => {
        const x = event.clientX;
        const y = event.clientY;

        vertical.style.transform = `translateX(${x}px)`;
        horizontal.style.transform = `translateY(${y}px)`;
        target.style.transform =`translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
        tag.style.transform =`translate(${x + 20 }px, ${y + 20}px)`;
        tag.innerHTML = `${x}px, ${y}px`;
        // vertical.style.left = `${x}px`
        // horizontal.style.top = `${y}px`
        // target.style.left = `${x}px`
        // target.style.top = `${y}px`
        // tag.style.left = `${x}px`
        // tag.style.top = `${y}px`

        //top,left 레이아웃과 페인트가 계속 일어나기 떄문에 성능에 안좋음 but transform translate을 이용하면 
        //성능이 비교적 괜찮음 composite만 일어남
    });
});
