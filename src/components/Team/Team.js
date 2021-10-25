import './Team.scss';
import back from '../../assets/img/team/back.png';

import card1 from '../../assets/img/team/card1.svg';
import card2 from '../../assets/img/team/card2.svg';
import card3 from '../../assets/img/team/card3.svg';
import card4 from '../../assets/img/team/card4.svg';
import card5 from '../../assets/img/team/card5.svg';
import card6 from '../../assets/img/team/card6.svg';

import bottomTransition from '../../assets/img/team/SectionTransition2 3.svg';

export const Team = () => {
    const info = [
        {
            img: card1,
            desc: 'Enterpreneur and talent agent'
        },
        {
            img: card2,
            desc: 'Healthcare executive'
        },
        {
            img: card3,
            desc: 'Award winning songwriter, performer, and producer'
        },
        {
            img: card4,
            desc: 'Multi-blockchain, smart contract developer'
        },
        {
            img: card5,
            desc: 'Community organizer'
        },
        {
            img: card6,
            desc: 'Creative director overseeing art development'
        }
    ]

    return (
        <section className="team">
            <div className="container">
                <div className="team__back">
                    <img alt="back" src={ back }></img>
                </div>

                <div className="team__title">
                    TEAM
                </div>

                <div className="team__content">
                    {
                        info.map((item, index) => (
                            <div className="team__content__item" key={index}>
                                <div className="team__content__item__img">
                                    <img alt="pic" src={item.img}></img>
                                </div>

                                <div className="team__content__item__desc">
                                    {item.desc}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="team__bottomTransition">
                <img alt="top" src={ bottomTransition }></img>
            </div>
        </section>
    )
}

export default Team;