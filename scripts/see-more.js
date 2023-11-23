function toggleSeeMore() {
  var detailContainer = document.querySelector('.detail-body .detail-book-description');
  var additionalContent = document.querySelector('.detail-body .detail-book-description .additional-content');

  detailContainer.classList.toggle('expanded');

  if (detailContainer.classList.contains('expanded')) {
    detailContainer.style.maxHeight = detailContainer.scrollHeight + 'px';
    document.querySelector('.detail-body .see-more').innerText = 'See less';
  } else {
    document.querySelector('.detail-body .see-more').innerText = 'See more';
    detailContainer.style.maxHeight = '150px';
  }
}   