const heroContent = document.querySelector('.hero__content')
const inquirySections = [...heroContent.querySelectorAll('.inquiry__section')]
const inquiryContents = [...heroContent.querySelectorAll('.inquiry__content')]

heroContent.addEventListener('click', (e) => {
  const inquiryHeader = e.target.closest('.inquiry__header')
  if (!inquiryHeader) return
  const inquirySection = inquiryHeader.parentElement
  const inquiryContent = inquiryHeader.nextElementSibling
  const inquiryBody = inquiryContent.children[0]

  let height = inquirySection.classList.contains('is-selected')
    ? 0
    : inquiryBody.getBoundingClientRect().height

  inquirySections.forEach((s) => {
    s.classList.remove('is-selected')
    inquirySection.classList.add('is-selected')
  })

  inquiryContents.forEach((c) => {
    c.classList.remove('is-selected')
    inquiryContent.classList.add('is-selected')
    if (!inquiryContent.classList.contains('is-selected')) {
      height = 0
    } else {
      inquiryBody.getBoundingClientRect().height
    }

    inquiryContent.style.height = `${height}px`
  })

  // inquirySection.classList.toggle('is-selected')
})
