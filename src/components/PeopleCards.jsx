import React from 'react'

function PeopleCards() {


    const peopleList = [
        {
            img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/rob-kostich.jpg",
            name: "Rob Kostich",
            position: "President"
        },
        {
            img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/josh-taub.jpg",
            name: "Rob Kostich",
            position: "President"
        },
                {
            img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/dave-stohl.jpg",
            name: "Rob Kostich",
            position: "President"
        },
                {
            img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/patt-kelly.jpg",
            name: "Rob Kostich",
            position: "President"
        },
                {
            img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/tyler-bahl.jpg",
            name: "Rob Kostich",
            position: "President"
        },
                {
            img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/matt-cox.jpg",
            name: "Rob Kostich",
            position: "President"
        },
    ]


  return (
    <div className='flex flex-wrap justify-center'>
        {
            peopleList.map((person, index) => (
                <div key={index} className='p-3 flex flex-col items-center gap-5 flex-wrap'>
                    <img className='rounded-full w-40 lg:w-90' src={person.img} alt="" />
                    <h1>{person.name}</h1>
                    <h1>{person.position}</h1>
                </div>
            ))
        }
    </div>
  )
}

export default PeopleCards