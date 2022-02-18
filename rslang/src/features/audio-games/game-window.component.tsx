import React from 'react';
import {BlockGame, ButtonAudio} from './styles';
import BlockIndicator from './block-indicator.component';
import audioButton from '../../assets/svg/audioButton.svg';
import BlockButton from './block-buttom.component';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {wordsSelector} from "./audio-call.selectors";

const GameWindow = (props: { level: number }): React.ReactElement => {
    const dispatch = useAppDispatch();
    const words = useAppSelector(wordsSelector);
    return (
        <BlockGame>
            <BlockIndicator/>
            <ButtonAudio src={audioButton}/>
            <BlockButton/>
        </BlockGame>
    );
};

export default GameWindow;
