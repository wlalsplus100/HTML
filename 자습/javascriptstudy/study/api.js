const getLatestNews = async () => {
  //   let url = new URL(
  //     `https://api.newscatcherapi.com/v2/latest_headlines?countries=EU&topic=business&page_size=2`
  //   );
  //   let header = new Headers({
  //     "x-api-key": `etqy7eM2V3lUTuA2OodPjglnF5iI1n-HoNltcp4x3jA`,
  //   });

  //   let response = await fetch(url, { headers: header });
  //   let data = await response.json();

  let data = {
    articles: [
      {
        title: "충격과 공포...",
        description: "대마고 소속 박지민 충격적 행보...",
        img: "공듀.jpg",
      },
      {
        title: "생일선물이 만든 참사",
        description: "어울려 보이는 선물을 준 결과...",
        img: "공듀2.jpg",
      },
      {
        title: "호문클롭스 출현?!",
        description: "현재 시각으로부터 7시간 전 호문클롭스와 유사한...",
        img: "눈3.jpg",
      },
      {
        title: "브이 한 것만으로 지문 인식 가능하다",
        description: "사진에 노출된 손가락의 지문으로 지문인식장치를 해제...",
        img: "더블피스박지민.png",
      },
      {
        title: "이 것은 최고다! 평론가가 극찬한 영화",
        description: '이번 분기 개봉한 영화 "신문"이 대호평...',
        img: "따봉.jpg",
      },
      {
        title: "교통법규를 잘 지킵시다",
        description: "'교통법규를 잘 지키지 않는다'에 응답한 사람이 50%...",
        img: "법규.jpg",
      },
      {
        title: "인간과 동물의 이종교배 실험 성공?",
        description:
          "인간과 라마의 이종교배에 성공했다는 실험결과가 드러났다...",
        img: "지라마.png",
      },
      {
        title: "오싹한 귀신의 집 10선",
        description:
          "자고로 여름에는 간담을 서늘하게 하는 귀신의 집이 필수 코스...",
        img: "커신.jpg",
      },
      {
        title: "AI로 누끼따기",
        description:
          "이번 시간에는 발전한 AI로 이미지의 누끼를 깔끔하게 따는 법을...",
        img: "투명얼굴.png",
      },
      {
        title: "미성년자 성폭력 이대로 괜찮은 것인가?",
        description: '"저는 지금 정말로 행복해요" 정말 그러한가',
        img: "행복함.jpg",
      },
      {
        title: "회전초밥이 그렇게 맛있다고?",
        description:
          "회전초밥이 가격대비 가성비가 훌륭하여 초밥열풍이 불고있다...",
        img: "회전초밥.jpg",
      },
    ],
  };
  let news = data;
  return news;
};

const render = (titleList, descriptionList, nameList, listIndex) => {
  const contentBox = document.querySelector(".content");
  console.log(contentBox);
  let news = document.createElement("div");
  news.innerHTML = `
          <div class="news">
  <div class="news-img">
    <img
      src="img/${nameList[listIndex]}"
      alt=""
      width="200px"
    />
  </div>
  <div class="news-info">
    <h2 class="title">${titleList[listIndex]}</h2>
    <p class="description">${descriptionList[listIndex]}</p>
    <div class="provide">YRL * 2023.06.16</div>
  </div>`;
  contentBox.appendChild(news);
};

async function initialize() {
  let news = await getLatestNews();
  let imgName = news.articles.map((obj) => obj.img);
  let titles = news.articles.map((obj) => obj.title);
  let descriptions = news.articles.map((obj) => obj.description);
  console.log(imgName);
  render(titles, descriptions, imgName, 0);
  render(titles, descriptions, imgName, 1);
  render(titles, descriptions, imgName, 2);
  render(titles, descriptions, imgName, 3);
  render(titles, descriptions, imgName, 4);
  render(titles, descriptions, imgName, 5);
  render(titles, descriptions, imgName, 6);
  render(titles, descriptions, imgName, 7);
  render(titles, descriptions, imgName, 8);
  render(titles, descriptions, imgName, 9);
  render(titles, descriptions, imgName, 10);
}

initialize();
