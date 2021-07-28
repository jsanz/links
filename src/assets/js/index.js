import "tachyons";

import { links } from './links';

const renderLink = function (link, template) {
  const linkDiv = template.content.firstElementChild.cloneNode(true);
  if (linkDiv && linkDiv.hasChildNodes()){
    linkTag = linkDiv.firstElementChild;    
    linkTag.href = link.link;
    linkTag.setAttribute('title', link.text);

    // Icon
    linkImg = linkTag.querySelector('.link-img');
    linkImg.src = linkImg.src.replace('slug',link.icon);

    // Text
    linkTag.querySelector('.link-title').innerHTML = link.text;
    return linkDiv;
  }
}


document.addEventListener('DOMContentLoaded', function () {

  const section = document.getElementById('links-list');
  const template = document.getElementById('template-link')

  for (let i=0; i < links.length; i++) {
    const linkTag = renderLink(links[i], template);
    section.appendChild(linkTag);
  }
});
