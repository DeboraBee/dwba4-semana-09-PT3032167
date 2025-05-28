<script>
  // Dados dos slides
  const slidesData = [
    { type: 'image', src: 'A.png' },
    { type: 'image', src: 'B.jpeg' },
    { type: 'image', src: 'C.jpeg' },
    {
      type: 'video',
      title: 'Conheça os desafios de inovação - IFSP',
      src: 'https://www.youtube.com/embed/5g5LQe3m8Po'
    }
  ];

  // Inserção dinâmica no DOM
  const container = document.getElementById('slideshow-container');

  slidesData.forEach((slide, index) => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('slide');
    if (index === 0) slideDiv.classList.add('active'); // Mostra o primeiro slide

    if (slide.type === 'image') {
      const img = document.createElement('img');
      img.src = slide.src;
      img.alt = `Slide ${index + 1}`;
      img.style.maxWidth = '100%';
      slideDiv.appendChild(img);
    } else if (slide.type === 'video') {
      const title = document.createElement('h1');
      title.textContent = slide.title;

      const wrapper = document.createElement('div');
      wrapper.classList.add('videoWrapper');

      const p = document.createElement('p');
      p.setAttribute('align', 'center');

      const iframe = document.createElement('iframe');
      iframe.width = '560';
      iframe.height = '315';
      iframe.src = slide.src;
      iframe.frameBorder = '0';
      iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;

      p.appendChild(iframe);
      wrapper.appendChild(p);
      slideDiv.appendChild(title);
      slideDiv.appendChild(wrapper);
    }

    container.appendChild(slideDiv);
  });

  // Lógica do slideshow
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  document.getElementById('next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  document.getElementById('prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
</script>
