import { shallow } from 'enzyme';
import React from 'react';
import QuestionPanel, { TimerBox, TimerText, YouTubeBox } from './components/QuestionPanel';
import QuestionContainer from './components/QuestionContainer';
import QuestionOptions from './components/QuestionOptions';
import { GroupDiv } from './pages/dashboard';

describe('QuestionPanel Tests', () => {
  it('Renders the expected components', () => {
    const wrapper = shallow(<QuestionPanel />);
    expect(wrapper.find(GroupDiv)).toHaveLength(1);
    expect(wrapper.find(QuestionContainer)).toHaveLength(1);
    expect(wrapper.find(TimerBox)).toHaveLength(1);
    expect(wrapper.find(TimerText)).toHaveLength(1);
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find(QuestionOptions)).toHaveLength(1);
  })

  it('Does not render Image and Video components unless passed images/url from the backend', () => {
    const wrapper = shallow(<QuestionPanel />);
    expect(wrapper.find(YouTubeBox)).toHaveLength(0);
    expect(wrapper.find('Image')).toHaveLength(0);
  })

  it('Correctly displays the timer', () => {
    const timer = 5;
    const wrapper = shallow(<QuestionPanel timer={timer} />);
    const timerText = wrapper.find(TimerText);
    expect(timerText.text().includes('Timer: 5')).toBe(true);
  })

  it('Still renders TimerText if no timer is passed in', () => {
    const wrapper = shallow(<QuestionPanel />);
    const timerText = wrapper.find(TimerText);
    expect(timerText.text().includes('Timer: ')).toBe(true);
  })

  it('Correctly passes the counter to QuestionContainer', () => {
    const counter = 5;
    const wrapper = shallow(<QuestionPanel counter={counter}/>);
    const QC = wrapper.find(QuestionContainer);
    expect(QC.prop('counter')).toBe(counter);
  })

  it('Correctly passes an undefined value to QuestionContainer if the counter is not defined', () => {
    const wrapper = shallow(<QuestionPanel/>);
    const QC = wrapper.find(QuestionContainer);
    expect(QC.prop('counter')).toBe(undefined);
  })

  it('Correctly passes the playerId to QuestionOptions', () => {
    const playerId = '5';
    const wrapper = shallow(<QuestionPanel playerId={playerId}/>);
    const QC = wrapper.find(QuestionOptions);
    expect(QC.prop('playerId')).toBe(playerId);
  })

  it('Correctly passes an undefined value to QuestionOptions if the playerID is not defined', () => {
    const wrapper = shallow(<QuestionPanel/>);
    const QC = wrapper.find(QuestionOptions);
    expect(QC.prop('playerId')).toBe(undefined);
  })
})
