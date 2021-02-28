let shopitem = [
    'bag',
    'banana',
    'bathroom',
    'boots',
    'breakfast',
    'bubblegum',
    'chair',
    'cthulhu' ,
    'dog-duck',
    'dragon',
    'pen',
    'pet-sweep',
    'scissors',
    'shark',
    'sweep' ,
    'tauntaun',
    'unicorn',
    'usb',
    'water-can',
    'wine-glass'
  ];
  let buttonShowResult = document.getElementById('show_result');
  let ulShowResult = document.getElementById('show_data')
let imageSection = document.getElementById( 'results' );
let leftImage = document.getElementById( 'leftImage' );
let centertImage = document.getElementById( 'cinterImage' );
let rightImage = document.getElementById( 'rightImage' );


let leftGoatIndex = 0;
let rightGoatIndex = 0;
let cinterGoatIndex = 0;


const clickCounter = 23;

function item( name ) {
    this.name = name;
    this.image = `./img/${name}.jpg`;
    this.clicks = 0;
    this.show = 0;
    item.all.push( this );
  }
  
  item.all = [];
  item.counter = 0;
  
  for( let i = 0; i < shopitem.length; i++ ) {
    new item( shopitem[i] );
  }
  
  function renderNewGoat() {
    buttonShowResult.style.display='none';
    ulShowResult.style.display='none';
    let leftIndex = randomNumber( 0, item.all.length - 1 );
    leftImage.src = item.all[leftIndex].image;
    leftImage.alt = item.all[leftIndex].name;
    leftGoatIndex = leftIndex;

    
  
    let rightIndex;
    do {
      rightIndex = randomNumber( 0, item.all.length - 1 );
    } while( leftIndex == rightIndex );

   
    
    rightImage.src = item.all[rightIndex].image;
    rightImage.alt = item.all[rightIndex].name;
    rightGoatIndex = rightIndex;
    
    let centertIndex;
do {
    centertIndex = randomNumber( 0, item.all.length - 1 );
    } while( leftIndex == centertIndex || rightIndex == centertIndex);

    centertImage.src = item.all[centertIndex].image;
    centertImage.alt = item.all[centertIndex].name;
    cinterGoatIndex = rightIndex;
  
    item.all[leftIndex].show++;
    item.all[rightIndex].show++;
    item.all[centertIndex].show++;

  
  
    // rightImage.src = item.all[0].image;
  }
  
  function handelClick( event ) {
 
    if( item.counter <= clickCounter ) {
      
      const clickedElement = event.target;
      if( clickedElement.id == 'leftImage' || clickedElement.id == 'rightImage' || clickedElement.id =='cinterImage') {
        if( clickedElement.id == 'leftImage' ) {
          item.all[leftGoatIndex].clicks++;
        
        }
  
        if( clickedElement.id == 'rightImage' ) {
          item.all[rightGoatIndex].clicks++;
         

        }
        

        if( clickedElement.id == 'cinterImage' ) {
            item.all[cinterGoatIndex].clicks++;
        

          }
  
        item.counter++;
        renderNewGoat();
  
        console.log( item.all );
      }
    }else
    {
        buttonShowResult.style.display='block';
    }
    
  }
  function showData(event)
  {
    ulShowResult.style.display='block';
    for(let y=0;y<item.all.length;y++){
        const liElement = document.createElement('li');
        ulShowResult.appendChild(liElement);
        liElement.textContent=item.all[y].name+' had '+ item.all[y].clicks+ ' votes, and was seen '+item.all[y].show+' times.'
    }
    buttonShowResult.removeEventListener('click',showData,true);
  
  
    imageSection.removeEventListener( 'click', handelClick,true );
  }
  buttonShowResult.addEventListener('click',showData);
  
  
  imageSection.addEventListener( 'click', handelClick );
 
  console.log( 'ffdgfg',item.all );
  
  // Helper function
  function randomNumber( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
  }
  
  renderNewGoat();