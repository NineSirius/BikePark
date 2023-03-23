import Button from '@/components/UI/Button'
import styles from './RentPage.module.css'
import Image from 'next/image'
import clsx from 'clsx'
import { Select } from '@/components/UI/Select'
import { Tooltip } from '@/components/UI/Tooltip'
import { useState } from 'react'

export const RentPage = () => {
    const [typeInfo, setTypeInfo] = useState(false)
    return (
        <div className="container">
            <div className={styles['card-main-wrap']}>
                <div className="card-main">
                    <div className={styles['header-banner-wrap']}>
                        <h1 className={clsx('title', styles['card-title'])}>
                            Аренда велосипедов <br /> c доставкой
                        </h1>

                        <div className={styles['header-banner']}>
                            <div className={styles['header-banner-item']}>
                                <Image
                                    src="/img/helmet.png"
                                    width={1280}
                                    height={720}
                                    alt="Шлем"
                                />
                                <div className={styles.info}>
                                    <h4 className={styles['info-title']}>
                                        Шлем
                                    </h4>
                                    <span className={styles['info-price']}>
                                        Бесплатно
                                    </span>
                                </div>
                            </div>
                            <div className={styles['header-banner-item']}>
                                <Image
                                    src="/img/flashlight.png"
                                    width={1280}
                                    height={720}
                                    alt="Шланг"
                                />
                                <div className={styles.info}>
                                    <h4 className={styles['info-title']}>
                                        Фонарик
                                    </h4>
                                    <span className={styles['info-price']}>
                                        Бесплатно
                                    </span>
                                </div>
                            </div>
                            <div className={styles['header-banner-item']}>
                                <Image
                                    src="/img/lock.png"
                                    width={1280}
                                    height={720}
                                    alt="Чота там"
                                />
                                <div className={styles.info}>
                                    <h4 className={styles['info-title']}>
                                        Замок
                                    </h4>
                                    <span className={styles['info-price']}>
                                        Бесплатно
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles['filter-wrap']}>
                        <div className={styles['filter-item']}>
                            <span className="caption">Доставка</span>
                            <Select
                                name="name"
                                options={['По адресу', 'Самовызов']}
                            />
                        </div>
                    </div>
                </div>
                <div className="card-main">
                    <span className='caption'>Тип велосипеда</span>
                </div>
            </div>
        </div>
    )
}
