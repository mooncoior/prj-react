import React from 'react';
import '../common/style.css';
import {useState,useCallback,useRef,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import * as cm from "../common/common"
import axios from 'axios';

const Main = () => {
    return (
      <form name="boardSearchForm" class="boardForm">
      <header>공지사항</header>
      <table class="search_bar"> 
        <tr>
          <td class="searchbar_box">
            <input type="text" name="keyword1"/>
  
            <input class="search_btn" type="button" value="검색" onclick="search()"/>
            <span onclick="location.replace('/boardRegForm.do');" class="newBoard_btn">[새글쓰기]</span>
          </td>
        </tr>
      </table>
      <input type="hidden" name="selectPageNo" value="1"/>
      
      <input type="hidden" name="sort"/>
      <table>
            <section class="count_desc">
              <section class="searchResultCnt">
                  <div class="impect">전체 :   개</div> 
             </section>
              
                <select name="rowCntPerPage" onChange="search()" class="rownum">
                      <option value="10"/>10 
                      <option value="15"/>15 
                      <option value="20"/>20 
                </select>&nbsp;행 
            </section>
      </table>
      <div>
        
      
      </div>
    
      <div class="search_list">	
        <div>
            <div onClick="goBoardDetailForm(${board.b_no})" class="search_con">
              <div class="b_no"> </div> 
              <div class="subject"> </div>
              <div class="writer"> </div>
              <div class="view_i">
                <div class="reg_date list_reg">
                  <i class="fa fa-calendar-o" aria-hidden="true"></i>
                  <span class="reg_date"> </span>
                </div>
                <div class="readcount">
                  <i class="fa fa-eye" aria-hidden="true"></i>
                  <span> </span>
                </div> 
              </div>
            </div>
        </div>
      </div>
      <div class="pageNos"> 
        <span onClick="pageNoClick(1)"><i class="fa fa-angle-left" aria-hidden="true"></i><i class="fa fa-angle-left" aria-hidden="true"></i></span>
        <span onClick="pageNoClick(${requestScope.boardMap.selectPageNo}-1)"><i class="fa fa-angle-left" aria-hidden="true"></i></span>
            <span class="isClick"> </span>
            <span class="unClick" onClick="pageNoClick( )"> </span>
        <span onClick="pageNoClick(${requestScope.boardMap.selectPageNo}+1)"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
        <span onClick="pageNoClick(${requestScope.boardMap.last_pageNo})"><i class="fa fa-angle-right" aria-hidden="true"></i><i class="fa fa-angle-right" aria-hidden="true"></i></span>
      </div>
    </form>
    )
  }
  
  export default Main;