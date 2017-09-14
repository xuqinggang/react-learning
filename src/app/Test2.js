import React, { Component } from 'react';
import $ from 'jquery';
import './style.scss';
export default class Test2 extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let formData = new FormData();
        formData.append('avatar', 'https://www.kuaizhan.com/apiv1/forums/57b0081e882a2a352ab42390');
        console.log('putx')
        // fetch('https://www.kuaizhan.com/apiv1/forums/57b0081e882a2a352ab42390', {
        //     method: 'PUT',
        // })
        // https://www.kuaizhan.com/theme/ajax-save-site-theme-draft
        $.ajax({
            url: 'https://www.kuaizhan.com/apiv1/forums/57b0081e882a2a352ab42390',
            type: 'PUT',
            // data: {
            //     'site_id':8780722591,
// 'theme_name':'theme-18',
            // },
            headers: {
            'content-Type' :'application/x-www-form-urlencoded; charset=UTF-8',
                // 'Authorization':'Basic VitalAlert:5kpN9cYTafnVmZTS',
                // 'content-Type':'application/json',
                // 'Origin': 'www.kuaizhan.com',
            },
            // 'contentType' :'application/x-www-form-urlencoded; charset=UTF-8',
            // success: function( response ) {
            // },
            // error: function(err) {
            //     console.log('xx',err)
            // }

            // data: {
            //     'avatar': '1231'
            // }
            // type: 'PUT',
            // contentType: "application/json",
            // data: {"data": "mydata"},
            // data: formData,
            // contentType: false,
        }).fail(err =>{
            console.log('er', err);
        }).done( info => {

            console.log('info', info);
        } )
    }
    render() {
        return (
            <div>
                {
                    // <div>
                    //     <ul>
                    //         <li className="box"></li>
                    //         <li className="box"></li>
                    //         <li className="box"></li>
                    //     </ul>
                    // </div>
                    //     <div>
                    //         <span className="tall-box text-bottom"></span>
                    //         <span className="short-box"></span>

                    //     {
                    //         // <!-- right mark-up -->
                    //         // <span class="tall-box text-top"></span>
                    //         // <span class="short-box"></span>
                    //     }
                    // </div>
                    //     <div>
                    //         <span className="icon middle"></span>
                    //         <span className="middle">Centered!x</span>
                    //     </div>
                    //     <div className="ctn-block">
                    //         <div className="child1"></div>
                    //         <span>Ggxx</span>
                    //     </div>
                }
                <div className="test">
                    <div className="left">
                    </div>
                    <div className="right">
                    </div>
                </div>
                <div className="test">
                    <div className="test21">
                    </div>
                    <div className="test21 align">
                        <span class="test21-span">right-span</span>
                    </div>
                </div>
                {
                    // <div className="test2-wrap">

                    //     <div className="left">
                    //         <span className="money-icon">￥</span><span className="money-price">xxxasdfasdfasdf</span>
                    //     </div>
                    //     {
                    //         <span className="info-type">手机x</span>
                    //         }
                    //     </div>
                }
            </div>
        )
    }
}
