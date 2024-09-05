const CarouselImgList = ['img_carousel1','img_carousel2','img_carousel3','img_carousel4']
const PathImgMobile = ['assets/capa_beleza.png','assets/capa_casa.png','assets/capa_acessorios.png','assets/capa_tech.png']
const PathImgDesktop = ['assets/capa_beleza_desktop.png','assets/capa_casa_desktop.png','assets/capa_acessorios_desktop.png','assets/capa_tech_desktop.png']


function updateImageSources(imageIds, imageSourcesDesktop,imageSourcesMobile ) {
    const images = [];
  
    // Coleciona as imagens pelos IDs e armazena na lista
    for (let i = 0; i < imageIds.length; i++) {
      const image = document.getElementById(imageIds[i]);
      if (image) {
        images.push(image);
      }
    }
  
    // Configura o src para cada imagem
    for (let i = 0; i < images.length; i++) {
        if (window.innerWidth < 500) {
            images[i].src = imageSourcesMobile[i];
        
        }else{
            images[i].src = imageSourcesDesktop[i];
            }
    }
  }


  updateImageSources(CarouselImgList, PathImgDesktop,PathImgMobile )