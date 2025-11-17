import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Flex from './flex';
import AlignContentLayout from './aligncontent';
import AlignSelfLayout from './alignself';
import AlignItemsLayout from './alignitems';
import Directlayout from './directionlayout';
import FlexbasisGandS from './flexbasisgrowandshrink';
import Fdbasics from './flexdirectionbasics';
import FlexWrapLayout from './flexwrap';
import JustifyContentBasics from './justifycontent';
import PositionLayout from './position';
import RgandCG from './rowgapandcolumngap';
import WidthHeightBasics from './widthandheight';

export default function App() {
  return(
    <>
    <Flex />

    <AlignContentLayout />

    <AlignSelfLayout />

    <AlignItemsLayout />

    <Directlayout />

    <FlexbasisGandS />

    <Fdbasics />

    <FlexWrapLayout />

    <JustifyContentBasics />

    <PositionLayout />

    <RgandCG />

    <WidthHeightBasics />
    </>
  );
}