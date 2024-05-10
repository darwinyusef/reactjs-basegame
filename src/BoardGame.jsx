import { useState } from 'react';
import './board.css';
import lv1 from './datas/lv1.json';


const BoardGame = () => {
    const board = [...lv1];
    const [element, setElements] = useState(board);

    return (
        <>
            <div className='board'>
                <section className='initName'>
                    {
                        element.map((res, index) => {
                            return (
                                <>
                                    {/*onClick={(event) => handleClick(event, index)}*/}
                                    <div className={`cell ${(res.status == 'open') ? 'open' : ""} ${(res.status == 'win') ? "win" : ""} ${(res.status == "close") ? "close" : ""}`} key={index} style={{ 'order': res.order }}>
                                        <span className='content'>
                                            {res.title}
                                        </span>
                                    </div>
                                </>
                            )
                        })
                    }
                </section>
                {/*style={{ display: closeBtn[0] }}*/}
                <div className="ms">
                    {/*{closeBtn[1]}*/}
                    <p>X</p>
                    {/*onClick={close}*/}
                    <span>x</span>
                </div>
            </div >
            <div>
                {/*onClick={gameReset}*/}
                <button> Resetear </button>
            </div>
        </>
    )
}

export default BoardGame