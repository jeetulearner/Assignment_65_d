it('Google Search',function(){

cy.visit("https://smartclient.com/smartgwt/showcase/#featured_dropdown_grid_category")

cy.get('#isc_2I > .comboBoxItemPicker').click()
cy.get('#isc_2E').type('Exercise',{ force: true }).type('{Enter}',{ force: true })
cy.get('#isc_2I > .comboBoxItemPicker').click()
cy.wait(5000)
cy.get("tr[role='option']").each(function($ele,index,list){
   if($ele.children().first().children().text().includes('Exercise')){
   cy.log($ele.children().first().children().text())
   if($ele.children().first().children().parent().next().children().text().includes('Ea')){
   cy.log($ele.children().first().children().parent().next().children().text())
   const text = $ele.children().first().children().parent().next().children().parent().next().children().text()
   cy.log(text)
   if(text>1.1){
   return false
    }
    else
    {
    cy.get('#isc_2E').type('{downArrow}',{ force: true })
    }
    }
   else{
      cy.get('#isc_2E').type('{downArrow}',{ force: true })
    }
    }
 else{
  cy.get('#isc_2E').type('{downArrow}',{ force: true })
//   cy.wrap($ele).type('{downArrow}',{ force: true })
  //  cy.wrap($ele).type('{Enter}',{ force: true })
   // cy.get('#isc_2E').type('{downArrow}',{ force: true })
    }


    })
    })