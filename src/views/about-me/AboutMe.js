import { CCol, CRow } from '@coreui/react';
import React from 'react';
import { aboutmeText } from './about-me.text';

const AboutMe = () => {
    return (
        <div className="bg-light text-dark">
            {/* title */}
            <div className="col-lg-12">
                <h1>{aboutmeText.title}</h1>
            </div>
            {/* body */}
            <CRow>
                <CCol lg="3"></CCol>
                <CCol lg="5">
                    <div>
                        <p style={{whiteSpace:'pre-line'}} >`{aboutmeText.text}`</p>
                    </div>
                </CCol>
            </CRow>
            
        </div>
    )
}

export default AboutMe;