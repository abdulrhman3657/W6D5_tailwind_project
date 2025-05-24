import React from 'react'

function GamesCards() { 

    const gamesList = [
        {
            img: "https://www.activision.com/content/dam/atvi/support/contact-us/BO6-FOB.jpg",
            title: "Call of Duty Black Ops 6",
            rating: "Mature 17+"
        },
                {
            img: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/warzone/common/wz-boxart.jpg",
            title: "Call of Duty Black Ops 6",
            rating: "Mature 17+"
        },
                        {
            img: "https://www.activision.com/content/dam/atvi/activision/games/call-of-duty/call-of-duty-modern-warfare-iii/mwiii-boxart.jpg",
            title: "Call of Duty Black Ops 6",
            rating: "Mature 17+"
        },
                        {
            img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/crash-bandicoot/crash-team-rumble/CTRumble_KEYART_SEASON2_1080X1350_AVAILABLE_NOW.jpg",
            title: "Call of Duty Black Ops 6",
            rating: "Mature 17+"
        },
                        {
            img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/tony-hawk/tony-hawk-pro-skater-1-2/thps-1-2-boxart.png",
            title: "Call of Duty Black Ops 6",
            rating: "Mature 17+"
        },
                        {
            img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/call-of-duty/mobile/codm-boxart.jpg",
            title: "Call of Duty Black Ops 6",
            rating: "Mature 17+"
        },
                        {
            img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/sekiro/shadows-die-twice/sekiro-boxart.jpg",
            title: "Call of Duty Black Ops 6",
            rating: "Mature 17+"
        },
                        {
            img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/spyro/reignited-trilogy/spyro-boxart.png",
            title: "Call of Duty Black Ops 6",
            rating: "Mature 17+"
        },
    ]


  return (
    <div className='flex flex-wrap gap-4  justify-center lg:w-8/10'>
        {
            gamesList.map((game, index) => (
                <div className='flex flex-col gap-4 '>
                    <img className='w-40 h-60 lg:w-60 lg:h-80 lg:border-0 border rounded-xl' src={game.img} alt="" />
                    <h1 className='font-bold'>{game.title}</h1>
                    <h1 className='text-gray-500'>{game.rating}</h1>
                </div>
            ))
        }
    </div>
  )
}

export default GamesCards