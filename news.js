
function firstCard(){
    var gDiv = document.createElement('div');
    gDiv.className = 'g_div';

    var h1 = document.createElement('h1');
    h1.textContent = 'GIIS International School News & Blogs';

    gDiv.appendChild(h1);

    var gFirst1 = document.createElement('div');
    gFirst1.id = 'g_first-1';

    var gFirstA = document.createElement('div');
    gFirstA.className = 'g_first_a';

    var img1 = document.createElement('img');
    img1.src = 'https://www.shutterstock.com/image-photo/portrait-two-diligent-girls-looking-260nw-130517294.jpg';
    img1.alt = 'students';

    gFirstA.appendChild(img1);

    var gFirstB = document.createElement('div');
    gFirstB.className = 'g_first_b';

    var h1B = document.createElement('h1');
    h1B.className = 'g_first_b1';
    h1B.textContent = 'Why High School Students are Falling Behind in Reading and Writing';


    h1B.addEventListener('click', function () {
        window.open('https://example.com/page1'); 
    });


    var pB = document.createElement('p');
    pB.className = 'g_first_b2';
    pB.textContent = 'High school is a significant part of the education process for any student, providing a crucial foundation for future academic pursuits.';

    gFirstB.appendChild(h1B);
    gFirstB.appendChild(pB);

    gFirst1.appendChild(gFirstA);
    gFirst1.appendChild(gFirstB);

    document.body.appendChild(gDiv);
    document.body.appendChild(gFirst1);

    document.body.appendChild(document.createElement('br'));

    var gFirst2 = document.createElement('div');
    gFirst2.id = 'g_first-2';

    var gFirstC = document.createElement('div');
    gFirstC.className = 'g_first_c';

    var img2 = document.createElement('img');
    img2.src = 'https://www.ameyaworldschool.in/idea/2017/03/indian-clipart-school-kid-11.jpg';
    img2.alt = '';

    gFirstC.appendChild(img2);

    var gFirstD = document.createElement('div');
    gFirstD.className = 'g_first_d';

    var h1D = document.createElement('h1');
    h1D.className = 'g_first_d1';
    h1D.textContent = 'The Importance of Technical Knowledge in the Modern World';

    // h1D.addEventListener('click', function () {
    //     window.open('https://example.com/page2'); // Replace 'https://example.com/page2' with your desired URL
    // });


    var pD = document.createElement('p');
    pD.className = 'g_first_d2';
    pD.textContent = 'All throughout the last century, formal education grew in importance and scope with more and more students opting for higher education in the fields of medicine, engineering and maths.';

    gFirstD.appendChild(h1D);
    gFirstD.appendChild(pD);

    gFirst2.appendChild(gFirstC);
    gFirst2.appendChild(gFirstD);

    document.body.appendChild(gFirst2);

}

firstCard();



function createLabSection() {
    var labs = [
        {
            title: 'Biology lab',
            text: ' Here the students conduct experiments, analyze specimens, and explore scientific concepts.',
            imgSrc: 'https://www.tripadapublicschool.in/public/uploads/amenities/1578591597.jpg'
        },
        {
            title: 'Physics lab',
            text: ' Here the Students conduct experiments, analyze data, and explore fundamental principles of physics.',
            imgSrc: 'https://www.brightmindsvidyodaya.com/wp-content/uploads/2013/08/IMG_5360.jpg'
        },
        {
            title: 'Chemistry lab',
            text: 'Students conduct experiments, analyze reactions, and learn essential laboratory skills.',
            imgSrc: 'https://gpsgobindgarh.in/wp-content/uploads/2017/06/CHEMISTRY-LAB-11.png'
        }
    ];

    var second1 = document.createElement('div');
    second1.className = 'second_1';

    var h1 = document.createElement('h1');
    h1.className = 'g_h1';
    h1.textContent = 'LABORATORIES';
    second1.appendChild(h1);

    var container = document.createElement('div');
    container.className = 'container text-center';
    second1.appendChild(container);

    var row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);

    labs.forEach(function(lab) {
        var col = document.createElement('div');
        col.className = 'col';
        row.appendChild(col);

        var card = document.createElement('div');
        card.className = 'card';
        card.style.width = '21rem';
        col.appendChild(card);

        var img = document.createElement('img');
        img.src = lab.imgSrc;
        img.className = 'card-img-top';
        img.alt = '...';
        card.appendChild(img);

        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        card.appendChild(cardBody);

        var h5 = document.createElement('h5');
        h5.textContent = lab.title;
        cardBody.appendChild(h5);

        var p = document.createElement('p');
        p.className = 'card-text';
        p.textContent = lab.text;
        cardBody.appendChild(p);
    });

    document.body.appendChild(second1);
}

createLabSection();
