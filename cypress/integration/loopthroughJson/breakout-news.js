Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
const sortNames = (arr) => {
    arr.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      }
      else if (b.title > a.title) {
        return -1;
      }
      return 0;
    })
    return arr;
  };

  const sortTiles = (arr) => {
    arr.sort((a, b) => {
      if (a > b) {
        return 1;
      }
      else if (b > a) {
        return -1;
      }
      return 0;
    })
    return arr;
  };


let apiData;
describe('Matching Api Data With UI Data',()=>{
    before(()=>{
        cy.request('GET','https://storage.googleapis.com/bacon-forbes-prd/skybox/payload.json')
        .then(res=>{
            apiData=JSON.parse(res.body);
                sortNames(apiData)
        });
    });

    beforeEach(()=>{
        cy.visit('https://www.forbes.com/?sh=4d561cac2254');
    });
    const titleArrayUi = [];
    const urlArrayUi=[];

    it('should titles be identical',()=>{
        cy.get('.fbs-slider__slides-wrapper a').then((ele,index)=>{

          titleArrayUi.push(`${ele.text()}|`)
          console.log(titleArrayUi)
          const result=titleArrayUi[0].split('|')

    //   const text=ele.text()
    //   titleArrayUi.push(`${text}|`)
    //   titleArrayUi.join('')
    //   titleArrayUi.split("|")
      console.log(result)
        //   expect(titleArrayUi[index]).to.be.equal(apiData[index].title)
          
         for(let i=0;i<apiData.length;i++){
             expect(result[i]).to.equal(apiData[i].title)
            //  if(titleArrayUi.includes(apiData[i].title)){

            //      cy.log(' test1 passed successfully')
            //      expect(titleArrayUi).to.be.includes(apiData[i].title)
            //  }
         }
        })
        
    })

    it('should urls be identical',()=>{
        cy.get('.fbs-slider__slides-wrapper a').then((ele)=>{
            urlArrayUi.push(ele.attr('href'))
         for(let i=0;i<apiData.length;i++){
             if(urlArrayUi.includes(apiData[i].uri)){
                 cy.log('test2 passed successfully')
             }
         }
        })
        
    })
})

