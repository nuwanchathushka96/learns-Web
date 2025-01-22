// Text content for the carousel
const textSlides = [
    {
      heading: "Totam, pariatur. Tempore error magni illo deserunt, ducimus iure minus nostrum provident repellat voluptatum maiores, sed, eum eligendi eius nesciunt quo veritatis?",
      text: "-Mr Kaweesha nanayakkara-"
    },
    {
      heading: "Lorem ipsum dolor sit amet, . Totam, pariatur. Tempore error magni illo deserunt, ducimus iure minus nostrum provident repellat voluptatum maiores, sed, eum eligendi eius nesciunt quo veritatis?",
      text: "-Mr Kasun kumara-"
    },
    {
      heading: "Lorem ipsum dolor sit amet, consectetur adipisicing elitatur. Tempore error magni illo deserunt, ducimus iure minus nostrum provident repellat voluptatum maiores, sed, eum eligendi eius nesciunt quo veritatis?",
      text: "-Mr Srinath wikramasinghe-"
    }
  ];

  let currentSlide = 0;
  const totalSlides = textSlides.length;
  let autoPlayInterval;

  // Function to update the text
  function updateText() {
    const heading = document.getElementById('carousel-heading');
    const text = document.getElementById('carousel-text');
    
    heading.textContent = textSlides[currentSlide].heading;
    text.textContent = textSlides[currentSlide].text;
  }

  // Function for the previous slide (updates only text)
  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;  // Decrement slide index
    updateText();  // Update the text
    resetAutoPlay();  // Reset the auto-play interval
  }

  // Function for the next slide (updates only text)
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;  // Increment slide index
    updateText();  // Update the text
    resetAutoPlay();  // Reset the auto-play interval
  }

  // Automatically change text every 3 seconds
  function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
      nextSlide();
    }, 3000);  // Change every 3 seconds
  }

  // Reset auto-play after manual interaction
  function resetAutoPlay() {
    clearInterval(autoPlayInterval);  // Stop current auto-play interval
    startAutoPlay();  // Restart auto-play
  }

  // Start auto-play when the page loads
  startAutoPlay();

  // Initialization for ES Users
