'use client'

import Image from "next/image";
import styles from "./page.module.css";
import {useState} from "react";

export default function Home() {
    const [selectedMsg, setSelectedMsg] = useState(0)
    const [isAgreed, setIsAgreed] = useState(false)

    const dangerMessages = [
        'Niiii',
        'I will be sad if you press this :(',
        'Haa bolo na baby',
        'Mera chottu baby, pleasssssssse',
        'Haa bolo',
        'Mai kbhi baat nhi krunga fir',
        'Achi baby bno aur haa bolo',
        'Aakhri baar pooch rha hu',
        'Ab Haa bolna hi padega'
    ]

    return (
        <main className={'app-main'} style={{background: `${isAgreed ? `url(/bg.avif)` : ''}`}}>
            <div className={'content-main'}>
                <div className={'animation'}>
                    {isAgreed ?
                        <img src="/a.gif" alt="GIF Image" />
                        :
                        <img src="/q.gif" alt="GIF Image" />
                    }
                </div>
                <div className={'heading'}>
                    {isAgreed ?
                        'Yayyy!! I love you chottu baby'
                        :
                        ''
                    }
                </div>
                {!isAgreed &&
                    <div className={'action-buttons'}>
                        <button
                            className={'primary'}
                            onClick={() => setIsAgreed(true)}
                        >
                            Yes
                        </button>
                        <button
                            className={'danger'}
                            disabled={selectedMsg === dangerMessages.length - 1}
                            onClick={() => setSelectedMsg(selectedMsg + 1)}
                        >
                            {dangerMessages[selectedMsg]}
                        </button>
                    </div>
                }
            </div>
        </main>
    );
}
