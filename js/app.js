let divImages = document.querySelector('.divImages');
let tanyaImg = document.querySelector('#carouselImages');
const next = document.querySelector('#next');
const previous = document.querySelector('#previous');
let johnImg;

let description = document.querySelector('.testimonial-text');
let autor = document.querySelector('.testimonial-author');
let position = document.querySelector('.testimonial-position');

let counter = 0;

let profileInfos = [
    {
        tanyaImage: '/images/image-tanya.jpg',
        tanyaDesciption: "“La programmation m'intéressait depuis un certain temps mais je n’avais jamais sauté le pas. Ce cours a été une révélation pour moi. Il m’a permis d’obtenir le job de mes rêves.“",
        tanyaAutor: 'Tanya Sinclar',
        tanyaPosition: 'UX Engineer'
    },
    {
        johnImage: '/images/image-john.jpg',
        johnDesciption: '“Si vous souhaitez poser les meilleures bases possibles, je vous recommande de suivre ce cours. Il m’a aidé à prendre confiance en moi et à devenir un meilleur développeur.“',
        johnAutor: 'John Tarkpor',
        johnPosition: 'Junior Front-end Developer'
    },
    {
        patrikImage: '/images/image-patrik.jpg',
        patrikDesciption: '“Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad fugiat quisquam, repellat atque excepturi natus commodi, magnam ratione minima dignissimos rem qui quibusdam similique earum, ullam perferendis voluptatem optio voluptates.“',
        patrikAutor: 'Patrik Jovial',
        patrikPosition: 'Senior Back-end Developer'
    },
    {
        vincentImage: '/images/image-vincent.jpg',
        vincentDesciption: '“Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad fugiat quisquam, repellat atque excepturi natus commodi, magnam ratione minima dignissimos rem qui quibusdam similique earum, ullam perferendis voluptatem optio voluptates.“',
        vincentAutor: 'vincent Jovial',
        vincentPosition: 'UI Engineer'
    }
]


// Click icons

// Next
function btn() {
    // next.addEventListener('click', () => {
    //     divImages.removeChild(tanyaImg);
    //     johnImg = document.createElement('img');
    //     divImages.appendChild(johnImg);
    //     johnImg.setAttribute('src', profileInfos.johnImage);
    //     johnImg.setAttribute('alt', 'John Tarkpor - Junior Front-end Dev');
    //     description.textContent = profileInfos.johnDesciption;
    //     autor.textContent = profileInfos.johnAutor;
    //     position.textContent = profileInfos.johnPosition;
    // });

    // previous.addEventListener('click', () => {
    //     divImages.removeChild(johnImg);
    //     tanyaImg = document.createElement('img');
    //     divImages.appendChild(tanyaImg);
    //     tanyaImg.setAttribute('src', profileInfos.tanyaImage);
    //     tanyaImg.setAttribute('alt', 'Tanya Sinclar - UX Engineer');
    //     description.textContent = profileInfos.tanyaDesciption;
    //     autor.textContent = profileInfos.tanyaAutor;
    //     position.textContent = profileInfos.tanyaPosition;
    // });

    next.addEventListener('click', () => {
        let test = profileInfos = counter++;
        img = document.createElement('img');
        divImages.appendChild(img);

        img.setAttribute('src', test);
    });
}
btn();


// Click keyboard keys