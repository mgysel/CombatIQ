import React, { useState, useContext, useEffect, useRef } from "react";
import {
  Flex,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Tag,
  TagLabel,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import './HumanBody.css';
import HumanBodyTag from "../components/HumanBodyTag";

const HumanBody = (props) => {
  let data = {
    'head': [4, 7],
    'body': [2, 8],
    'leftUpperLeg': [1, 3],
    'rightUpperLeg': [1, 2],
    'leftLowerLeg': [0, 2],
    'rightLowerLeg': [1, 4],
  }





//   <path
//   id="calf-left"
//   d="m 18.251375,70.441125 0.29058,0.91486 0.6224,3.8681 0.0829,5.15733 -0.87136,5.03304 0.0412,-6.44714 -0.91242,-2.57848 -0.12561,-2.82837 z m 1.9915,2.32915 -0.20753,7.73637 -1.65949,6.23904 1.80478,-0.853 3.00816,-10.83583 -1.03727,-6.82095 z" />
// 
//  <path
//   id="knee-left"
//   d="m 21.404635,64.784375 0.1243,1.12295 -0.87118,1.08171 -0.29058,1.70599 -0.58116,0.24933 -0.49774,-2.57866 -0.33182,-0.91486 0.29058,-0.58247 z m -3.85853,0.0832 0.6224,1.74685 1.3273,2.57867 -0.33182,2.37095 -0.95423,-2.66209 -0.78738,-1.49734 z m 4.97811,-2.37039 -0.95423,5.11609 0.62241,-0.33295 0.49773,1.66381 z" />

  // <svg 
  // data-position='left-leg' 
  // id='left-leg' class='left-leg' 
  // xmlns='http://www.w3.org/2000/svg' 
  // width='93.626' height='250.625' 
  // viewBox='0 0 93.626 250.625'>
  //   <path d='m 18.00179,139.99461 -0.664,5.99 4.647,5.77 1.55,9.1 3.1,1.33 2.655,-13.755 1.77,-4.88 -1.55,-3.107 z m 20.582,0.444 -3.32,9.318 -7.082,13.755 1.77,12.647 5.09,-14.2 4.205,-7.982 z m -26.557,-12.645 5.09,27.29 -3.32,-1.777 -2.656,8.875 z m 22.795,42.374 -1.55,4.88 -3.32,20.634 -0.442,27.51 4.65,26.847 -0.223,-34.39 4.87,-13.754 0.663,-15.087 z m -10.623,12.424 1.106,41.267 c 14.157565,64.57987 -5.846437,10.46082 -16.8199998,-29.07 l 5.5329998,-36.384 z m -9.71,-178.164003 0,22.476 15.71,31.073 9.923,30.850003 -1.033,-21.375 z m 25.49,30.248 0.118,-0.148 -0.793,-2.024 -16.545,-18.16 -1.242,-0.44 10.984,28.378 z m -6.255,10.766 6.812,17.6 2.274,-21.596 -1.344,-3.43 z m -26.4699998,17.82 0.827,25.340003 12.8159998,35.257 -3.928,10.136 -12.6099998,-44.51 z M 31.81879,76.04161 l 0.345,0.826 6.47,15.48 -4.177,38.342 -6.594,-3.526 5.715,-35.7 z m -21.465,-74.697003 0.827,21.373 L 4.1527902,65.02561 0.84679017,30.870607 Z m 2.068,27.323 14.677,32.391 3.307,26.000003 -6.2,36.58 -13.437,-37.241 -0.8269998,-38.342003 z'/>
  // </svg>

  // ADD BACK




  return (
  <div class="human-body">
    <div class='group-hover'>
      <HumanBodyTag 
        title='Head'
        hits={data.head[0]} attempts={data.head[1]} 
        marginTop='-255px'
        marginLeft='-5px'
        width='60px'
      />
      <svg data-position='head' id='head' class='head' xmlns='http://www.w3.org/2000/svg' width='56.594' height='95.031' viewBox='0 0 56.594 95.031'><path d='M15.92 68.5l8.8 12.546 3.97 13.984-9.254-7.38-4.622-15.848zm27.1 0l-8.8 12.546-3.976 13.988 9.254-7.38 4.622-15.848zm6.11-27.775l.108-11.775-21.16-14.742L8.123 26.133 8.09 40.19l-3.24.215 1.462 9.732 5.208 1.81 2.36 11.63 9.72 11.018 10.856-.324 9.56-10.37 1.918-11.952 5.207-1.81 1.342-9.517zm-43.085-1.84l-.257-13.82L28.226 11.9l23.618 15.755-.216 10.37 4.976-17.085L42.556 2.376 25.49 0 10.803 3.673.002 24.415z'/></svg>
    </div>
    <div class='body group-hover'>
      <HumanBodyTag 
          title='Body'
          hits={data.body[0]} attempts={data.body[1]} 
          marginTop='-160px'
          marginLeft='180px'
          width='60px'
      />
      <svg data-position='left-shoulder' id='left-shoulder' class='left-shoulder' xmlns='http://www.w3.org/2000/svg' width='109.532' height='46.594' viewBox='0 0 109.532 46.594'><path d='m 38.244,-0.004 1.98,9.232 -11.653,2.857 -7.474,-2.637 z M 17.005,10.536 12.962,8.35 0.306,22.35 0.244,27.675 c 0,0 16.52,-17.015 16.764,-17.14 z m 1.285,0.58 C 18.3,11.396 0.528,30.038 0.528,30.038 L -0.01,46.595 6.147,36.045 18.017,30.989 26.374,15.6 Z'/></svg>
      <svg data-position='right-shoulder' id='right-shoulder' class='right-shoulder' xmlns='http://www.w3.org/2000/svg' width='109.532' height='46.594' viewBox='0 0 109.532 46.594'><path d='m 3.2759972,-0.004 -1.98,9.232 11.6529998,2.857 7.473999,-2.637 z m 21.2379988,10.54 4.044,-2.187 12.656,14 0.07,5.33 c 0,0 -16.524,-17.019 -16.769,-17.144 z m -1.285,0.58 c -0.008,0.28 17.762,18.922 17.762,18.922 l 0.537,16.557 -6.157,-10.55 -11.871,-5.057 L 15.147997,15.6 Z'/></svg>
      <svg data-position='left-arm' id='left-arm' class='left-arm' xmlns='http://www.w3.org/2000/svg' width='156.344' height='119.25' viewBox='0 0 156.344 119.25'><path d='m21.12,56.5a1.678,1.678 0 0 1 -0.427,0.33l0.935,8.224l12.977,-13.89l1.2,-8.958a168.2,168.2 0 0 0 -14.685,14.294zm1.387,12.522l-18.07,48.91l5.757,1.333l19.125,-39.44l3.518,-22.047l-10.33,11.244zm-5.278,-18.96l2.638,18.74l-17.2,46.023l-2.657,-1.775l6.644,-35.518l10.575,-27.47zm18.805,-12.323a1.78,1.78 0 0 1 0.407,-0.24l3.666,-27.345l-7.037,-10.139l-7.258,10.58l-6.16,37.04l0.566,4.973a151.447,151.447 0 0 1 15.808,-14.87l0.008,0.001zm-13.742,-28.906l-3.3,35.276l-2.2,-26.238l5.5,-9.038z'/></svg>
      <svg data-position='right-arm' id='right-arm' class='right-arm' xmlns='http://www.w3.org/2000/svg' width='156.344' height='119.25' viewBox='0 0 156.344 119.25'><path d='m 18.997,56.5 a 1.678,1.678 0 0 0 0.427,0.33 L 18.489,65.054 5.512,51.164 4.312,42.206 A 168.2,168.2 0 0 1 18.997,56.5 Z m -1.387,12.522 18.07,48.91 -5.757,1.333 L 10.798,79.825 7.28,57.778 17.61,69.022 Z m 5.278,-18.96 -2.638,18.74 17.2,46.023 2.657,-1.775 L 33.463,77.532 22.888,50.062 Z M 4.083,37.739 A 1.78,1.78 0 0 0 3.676,37.499 L 0.01,10.154 7.047,0.015 l 7.258,10.58 6.16,37.04 -0.566,4.973 A 151.447,151.447 0 0 0 4.091,37.738 l -0.008,10e-4 z m 13.742,-28.906 3.3,35.276 2.2,-26.238 -5.5,-9.038 z'/></svg>
      <svg data-position='chest' id='chest' class='chest' xmlns='http://www.w3.org/2000/svg' width='86.594' height='45.063' viewBox='0 0 86.594 45.063'><path d='M19.32 0l-9.225 16.488-10.1 5.056 6.15 4.836 4.832 14.07 11.2 4.616 17.85-8.828-4.452-34.7zm47.934 0l9.225 16.488 10.1 5.056-6.15 4.836-4.833 14.07-11.2 4.616-17.844-8.828 4.45-34.7z'/></svg>
      <svg data-position='stomach' id='stomach' class='stomach' xmlns='http://www.w3.org/2000/svg' width='75.25' height='107.594' viewBox='0 0 75.25 107.594'><path d='M19.25 7.49l16.6-7.5-.5 12.16-14.943 7.662zm-10.322 8.9l6.9 3.848-.8-9.116zm5.617-8.732L1.32 2.15 6.3 15.6zm-8.17 9.267l9.015 5.514 1.54 11.028-8.795-5.735zm15.53 5.89l.332 8.662 12.286-2.665.664-11.826zm14.61 84.783L33.28 76.062l-.08-20.53-11.654-5.736-1.32 37.5zM22.735 35.64L22.57 46.3l11.787 3.166.166-16.657zm-14.16-5.255L16.49 35.9l1.1 11.25-8.8-7.06zm8.79 22.74l-9.673-7.28-.84 9.78L-.006 68.29l10.564 14.594 5.5.883 1.98-20.735zM56 7.488l-16.6-7.5.5 12.16 14.942 7.66zm10.32 8.9l-6.9 3.847.8-9.116zm-5.617-8.733L73.93 2.148l-4.98 13.447zm8.17 9.267l-9.015 5.514-1.54 11.03 8.8-5.736zm-15.53 5.89l-.332 8.662-12.285-2.665-.664-11.827zm-14.61 84.783l3.234-31.536.082-20.532 11.65-5.735 1.32 37.5zm13.78-71.957l.166 10.66-11.786 3.168-.166-16.657zm14.16-5.256l-7.915 5.514-1.1 11.25 8.794-7.06zm-8.79 22.743l9.673-7.28.84 9.78 6.862 12.66-10.564 14.597-5.5.883-1.975-20.74z'/></svg>
      <svg data-position='left-hand' id='left-hand' class='left-hand' xmlns='http://www.w3.org/2000/svg' width='90' height='38.938' viewBox='0 0 90 38.938'><path d='m 21.255,-0.00198191 2.88,6.90000201 8.412,1.335 0.664,12.4579799 -4.427,17.8 -2.878,-0.22 2.8,-11.847 -2.99,-0.084 -4.676,12.6 -3.544,-0.446 4.4,-12.736 -3.072,-0.584 -5.978,13.543 -4.428,-0.445 6.088,-14.1 -2.1,-1.25 L 4.878,34.934 1.114,34.489 12.4,12.9 11.293,11.12 0.665,15.57 0,13.124 8.635,5.3380201 Z' /></svg>
      <svg data-position='right-hand' id='right-hand' class='right-hand' xmlns='http://www.w3.org/2000/svg' width='90' height='38.938' viewBox='0 0 90 38.938'><path d='m 13.793386,-0.00198533 -2.88,6.90000163 -8.4120002,1.335 -0.664,12.4579837 4.427,17.8 2.878,-0.22 -2.8,-11.847 2.99,-0.084 4.6760002,12.6 3.544,-0.446 -4.4,-12.736 3.072,-0.584 5.978,13.543 4.428,-0.445 -6.088,-14.1 2.1,-1.25 7.528,12.012 3.764,-0.445 -11.286,-21.589 1.107,-1.78 10.628,4.45 0.665,-2.447 -8.635,-7.7859837 z'/></svg>
    </div>
    <div class='group-hover'>
      <HumanBodyTag 
          title='Right Upper Leg'
          hits={data.rightUpperLeg[0]} attempts={data.rightUpperLeg[1]} 
          marginTop='10px'
          marginLeft='-118px'
          width='146px'
      />
      <svg 
      data-position='left-upper-leg' id='left-upper-leg' class='left-upper-leg' 
      xmlns='http://www.w3.org/2000/svg' 
      width='93.626' height='131.625' 
      viewBox='0 0 93.626 131.625'>
        <path d='
          m 18.00179,139.99461 
          z 
          m 20.582,0.444 
          z 
          m -26.557,-12.645 
          z 
          m 22.795,42.374 
          z 
          m -10.623,12.424  
          m -9.71,-178.164003 0,22.476 15.71,31.073 9.923,30.850003 -1.033,-21.375 
          z 
          m 25.49,30.248 0.118,-0.148 -0.793,-2.024 -16.545,-18.16 -1.242,-0.44 10.984,28.378 
          z 
          m -6.255,10.766 6.812,17.6 2.274,-21.596 -1.344,-3.43 
          z 
          m -26.4699998,17.82 0.827,25.340003 12.8159998,35.257 -3.928,10.136 -12.6099998,-44.51 
          z 
          M 31.81879,76.04161 
          l 0.345,0.826 6.47,15.48 -4.177,38.342 -6.594,-3.526 5.715,-35.7 
          z 
          m -21.465,-74.697003 0.827,21.373 
          L 4.1527902,65.02561 0.84679017,30.870607 
          Z 
          m 2.068,27.323 14.677,32.391 3.307,26.000003 -6.2,36.58 -13.437,-37.241 -0.8269998,-38.342003 z
          '/>
      </svg>
    </div>
    <div class='group-hover'>
      <HumanBodyTag 
          title='Right Lower Leg'
          hits={data.rightLowerLeg[0]} attempts={data.rightLowerLeg[1]} 
          marginTop='125px'
          marginLeft='-118px'
          width='146px'
      />
      <svg 
        data-position='left-lower-leg' id='left-lower-leg' class='left-lower-leg' 
        xmlns='http://www.w3.org/2000/svg' 
        width='93.626' height='150.625' 
        viewBox='0 135 93.626 150.625'>
          <path d='
            m 18.00179,139.99461 -0.664,5.99 4.647,5.77 1.55,9.1 3.1,1.33 2.655,-13.755 1.77,-4.88 -1.55,-3.107 
            z 
            m 20.582,0.444 -3.32,9.318 -7.082,13.755 1.77,12.647 5.09,-14.2 4.205,-7.982 
            z 
            m -26.557,-12.645 5.09,27.29 -3.32,-1.777 -2.656,8.875 
            z 
            m 22.795,42.374 -1.55,4.88 -3.32,20.634 -0.442,27.51 4.65,26.847 -0.223,-34.39 4.87,-13.754 0.663,-15.087 
            z 
            m -10.623,12.424 1.106,41.267 
            c 14.157565,64.57987 -5.846437,10.46082 -16.8199998,-29.07 
            l 5.5329998,-36.384 
            z 
            m 5.558357,72.92821 c -22.1993328,20.55867 -11.0996668,10.27933 0,0 z m 5.975,5.989 -0.664,18.415 -1.55,6.435 -4.647,0 -1.327,-4.437 -1.55,-0.222 0.332,4.437 -5.864,-1.778 -1.5499998,-0.887 -6.64,-1.442 -0.22,-5.214 6.418,-10.87 4.4259998,-5.548 c 9.991542,-3.26362 9.41586,-8.41457 12.836,1.111 z
            '/>
      </svg>
    </div>
    <div class='group-hover'>
      <HumanBodyTag 
          title='Left Upper Leg'
          hits={data.leftUpperLeg[0]} attempts={data.leftUpperLeg[1]} 
          marginTop='10px'
          marginLeft='180px'
          width='133px'
      />
      <svg 
        data-position='right-upper-leg' id='right-upper-leg' class='right-upper-leg' 
        xmlns='http://www.w3.org/2000/svg' 
        width='80' height='131.625' 
        viewBox='0 0 80 131.625'
      >
        <path d='
          m -13.9460002,74.991 
          M 30.177979,4.225305 
          l 0,22.476 -15.713,31.072 -9.9230002,30.850005 1.033,-21.375005 
          z 
          m -25.4930002,30.249 -0.118,-0.15 0.793,-2.023 16.5450002,-18.16 1.24,-0.44 -10.98,28.377 
          z 
          m 6.2550002,10.764 -6.8120002,17.6 -2.274,-21.595 1.344,-3.43 
          z 
          m 26.47,17.82 -0.827,25.342005 -12.816,35.25599 3.927,10.136 12.61,-44.50999 
          z 
          m -24.565,12.783005 -0.346,0.825 -6.4700002,15.48 4.1780002,38.34199 6.594,-3.527 -5.715,-35.69999 
          z 
          m 19.792,51.74999 
          z 
          m 1.671,-126.452995 -0.826,21.375 7.03,42.308 3.306,-34.155 
          z 
          m -2.066,27.325 -14.677,32.392 -3.308,26.000005 6.2,36.57999 13.436,-37.23999 0.827,-38.340005 
          z
          '
        />
      </svg>
    </div>
    <div class='group-hover'>
      <HumanBodyTag 
          title='Left Lower Leg'
          hits={data.leftLowerLeg[0]} attempts={data.leftLowerLeg[1]} 
          marginTop='125px'
          marginLeft='180px'
          width='134px'
      />
      <svg 
        data-position='right-lower-leg' id='right-lower-leg' class='right-lower-leg' 
        xmlns='http://www.w3.org/2000/svg' 
        width='93.626' height='150.625' 
        viewBox='0 135 93.626 150.625'
      >
        <path d='
          m 26.664979,139.7913 0.663,5.99 -4.647,5.77 -1.55,9.1 -3.1,1.33 -2.655,-13.755 -1.77,-4.88 1.55,-3.107 
          z 
          m -20.5820002,0.444 3.3200005,9.318 7.0799997,13.755 -1.77,12.647 -5.0899997,-14.2 -4.2000005,-7.987 
          z 
          m 3.7620005,29.73 1.5499997,4.88 3.32,20.633 0.442,27.51 -4.648,26.847 0.22,-34.39 -4.8670002,-13.754 -0.67,-15.087 
          z 
          m 10.6229997,12.424 -1.107,41.267 -8.852,33.28 9.627,-4.55 16.046,-57.8 -5.533,-36.384 
          z 
          m -13.9460002,74.991 
          c -5.157661,19.45233 -2.5788305,9.72616 0,0 
          z 
          M 30.177979,4.225305 
          l 0,22.476 
          z 
          m -25.4930002,30.249 
          z 
          m 6.2550002,10.764 
          z 
          m 26.47,17.82
          z 
          m -24.565,12.783005 
          z 
          m 19.792,51.74999 -5.09,27.29 3.32,-1.776 2.655,8.875 
          z 
          m -18.723492,128.35897 c -40.202667,20.558 -20.1013335,10.279 0,0 z m -5.9740005,5.989 0.663,18.415 1.546,6.435 4.6480005,0 1.328,-4.437 1.55,-0.222 -0.333,4.437 5.863,-1.778 1.55,-0.887 6.638,-1.442 0.222,-5.214 -6.418,-10.868 -4.426,-5.547 -10.8440005,-4.437 z
          '
      />
      </svg>
    </div>






  </div>
  );
};

export default HumanBody;
