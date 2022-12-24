const cars = [
   {
      model: 'AS3431',
      battery: {
         mAh: 900000,
         perc: 73,
      },
   },
   {
      model: 'UAOSKE',
      fuel: {
         type: 'diesel',
         amount: 87,
      },
   },
]

// Old Fashion
for (const car of cars) {
   console.log('Model: ', car.model)

   if (car.battery) {
      console.log('Battery Life: ', car.battery.mAh)
      console.log('Battery Percentage: ', car.battery.perc)
   } else {
      console.log('Battery Life: ', '?')
      console.log('Battery Percentage: ', '?')
   }

   if (car.fuel) {
      console.log('Fuel Type: ', car.fuel.type)
      console.log('Fuel Left: ', car.fuel.amount)
   } else {
      console.log('Fuel Type: ', '?')
      console.log('Fuel Left: ', '?')
   }
}

// Modern JS
for (const car of cars) {
   console.log('Model: ', car.model)

   console.log('Battery Life: ', car?.battery?.mAh || '?')
   console.log('Battery Percentage: ', car?.battery?.perc || '?')

   console.log('Fuel Type: ', car?.fuel?.type || '?')
   console.log('Fuel Left: ', car?.fuel?.amount || '?')
}
