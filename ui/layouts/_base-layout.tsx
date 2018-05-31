import React, { ReactNode } from 'react'
import { Header, Footer } from '../generic'

type Props = { 
  children?: ReactNode 
 }
  

const BaseLayout = ({ children }: Props)=> (
  <div className='site'>
    <style jsx>{`
            .site{
               display: flex;
               min-height: 100vh;
               flex-direction: column;
            }
            .content {
               flex: 1;
            }
        `}</style>
    <Header />
    <div className='content'>
      {children}
    </div>
    <Footer />
  </div>
)

export default BaseLayout