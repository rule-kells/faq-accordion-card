const heroContent = document.querySelector('.hero__content')
const inquirySections = [...heroContent.querySelectorAll('.inquiry__section')]

const revealInquiries = (inquiry) => {
  const content = inquiry.querySelector('.inquiry__content')
  inquiry.classList.add('is-selected')
  content.style.height = `${content.scrollHeight}px`
}

const hideInquiries = (inquiry) => {
  const content = inquiry.querySelector('.inquiry__content')
  inquiry.classList.remove('is-selected')
  content.style.height = null
}

inquirySections.forEach((inquiry) => {
  const inquiryHeader = inquiry.querySelector('.inquiry__header')
  const content = inquiry.querySelector('.inquiry__content')

  inquiryHeader.addEventListener('click', () => {
    if (content.style.height) {
      hideInquiries(inquiry)
    } else {
      inquirySections.forEach((inquiry) => hideInquiries(inquiry))
      revealInquiries(inquiry)
    }
  })
})
