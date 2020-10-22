import { CCard, CCardBody, CCardHeader } from '@coreui/react';
import React from 'react';
import { aboutmeText } from './about-me.text';

const AboutMe = () => {
    return (
        <div>
            <CCard>
                <CCardHeader>
                    <h1>{aboutmeText.title}</h1>
                </CCardHeader>
                <CCardBody >
                    <div className="col-lg-5">
                        <p>{aboutmeText.text}</p>
                    </div>
                </CCardBody>
            </CCard>
        </div>
    )
}

export default AboutMe;