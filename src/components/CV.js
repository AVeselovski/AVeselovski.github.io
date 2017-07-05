import React from 'react';

export default class CV extends React.Component {
    render() {
        return (
            <section className="cv">
                <div className="container">
                    <div className="cv-container-1">
                        <h2>My Skills</h2>
                        <table className="skill-table">
                            <tbody>
                                <tr>
                                    <td className="table-title">&bull; &bull; &bull;</td>
                                    <td>HTML5, CSS3, JavaScript, JQuery, Sass, Bootstrap, Git</td>
                                </tr>
                                <tr>
                                    <td className="table-title">&bull; &bull;</td>
                                    <td>NodeJS, ReactJS, PHP, C++, C#, MongoDB, MaterialUI, Linux, Jekyll, Pug/Jade</td>
                                </tr>
                                <tr>
                                    <td className="table-title">&bull;</td>
                                    <td>MySQL, Apache2, Adobe Photoshop, Adobe Illustrator</td>
                                </tr>
                            </tbody>
                        </table>
                        <h2>Language Skills</h2>
                        <table className="language-table">
                            <tbody>
                                <tr>
                                    <td className="table-title">English</td>
                                    <td>- Fluent</td>
                                </tr>
                                <tr>
                                    <td className="table-title">Finnish</td>
                                    <td>- Bilingual Proficiency</td>
                                </tr>
                                <tr>
                                    <td className="table-title">Russian</td>
                                    <td>- Native Language</td>
                                </tr>
                                <tr>
                                    <td className="table-title">Swedish</td>
                                    <td>- Basic</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="cv-container-2">
                        <h2>Work Experience</h2>
                        <table className="experience-table">
                            <tbody>
                                <tr>
                                    <td className="table-title">Junior Web Developer</td>
                                    <td>15.05.2017 - 28.07.2017</td>
                                </tr>
                                <tr>
                                    <td>WIMMA Lab</td>
                                </tr>
                                <tr>
                                    <td>Responsible for creating web pages for the organization and front-end solution for one of the virtual companies.</td>
                                </tr>
                                <tr>
                                    <td className="table-title">Sales</td>
                                    <td>03.02.2014 - 28.11.2014</td>
                                </tr>
                                <tr>
                                    <td>Finruservice Oy</td>
                                </tr>
                                <tr>
                                    <td>Finruservice was a small business where I was responsible for sales and looking for business partners among other things.</td>
                                </tr>
                                <tr>
                                    <td className="table-title">Refunder / Customer Service</td>
                                    <td>17.06.2011 - 23.01.2014</td>
                                </tr>
                                <tr>
                                    <td>Global Blue Finland Oy</td>
                                </tr>
                                <tr>
                                    <td>My duties included verification of proper exportation of wares from EU zone and in turn refunding VAT to the customers, 
                                    marketing of Tax Free -cards / membership to clients and different office assignments.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        );
    }
}