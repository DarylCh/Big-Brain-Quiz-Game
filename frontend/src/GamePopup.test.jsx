import React from 'react';
import GamePopup from './components/GameStartPopup';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogActions, DialogContent, DialogContentText, Button } from '@mui/material';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Component test for the Game Popup', () => {
  it('Browser Router only renders one instance of GamePopup', () => {
    const wrapper = shallow(<BrowserRouter><GamePopup /></BrowserRouter>);
    expect(wrapper.find(GamePopup)).toHaveLength(1);
  })

  it('Contains all the correct components', () => {
    const wrapper = shallow(<GamePopup />);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('#game-dialogue')).toHaveLength(1);
    expect(wrapper.find(Dialog)).toHaveLength(1);
    expect(wrapper.find(DialogTitle)).toHaveLength(1);
    expect(wrapper.find('#alert-dialog-title')).toHaveLength(1);
    expect(wrapper.find(DialogContent)).toHaveLength(1);
    expect(wrapper.find(DialogActions)).toHaveLength(1);
    expect(wrapper.find(DialogContentText)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(2);
    expect(wrapper.find('#yes-button')).toHaveLength(1);
    expect(wrapper.find('#no-button')).toHaveLength(1);
  })

  it('Renders the correct buttons when isStart is set to true', () => {
    const wrapper = shallow(<GamePopup isStart={true}/>);
    expect(wrapper.find(Button)).toHaveLength(2);
    expect(wrapper.find('#copy-button')).toHaveLength(1);
    expect(wrapper.find('#close-button')).toHaveLength(1);
  })

  it('Renders the correct buttons when isStart is set to false', () => {
    const wrapper = shallow(<GamePopup isStart={false}/>);
    expect(wrapper.find(Button)).toHaveLength(2);
    expect(wrapper.find('#yes-button')).toHaveLength(1);
    expect(wrapper.find('#no-button')).toHaveLength(1);
  })

  it('Correctly displays a description only for the GameStart popup', () => {
    const description = 'test'
    const wrapper = shallow(<GamePopup desc={description} isStart={true}/>);
    const dialogueText = wrapper.find(DialogContentText);
    expect(dialogueText.text()).toBe(`${description}`);
  })

  it('Correctly displays a sessionId only for the GameStart popup', () => {
    const sessionId = '5';
    const wrapper = shallow(<GamePopup sessionId={sessionId} isStart={true}/>);
    const dialogueText = wrapper.find(DialogContentText);
    expect(dialogueText.text()).toBe(`${sessionId}`);
  })

  it('Correctly displays both a description and session ID for the GameStart popup', () => {
    const description = 'test'
    const sessionId = '5';
    const wrapper = shallow(<GamePopup desc={description} sessionId={sessionId} isStart={true}/>);
    const dialogueText = wrapper.find(DialogContentText);
    expect(dialogueText.text()).toBe(`${description}${sessionId}`);
  })

  it('Correctly displays the correct text when the game is stopped and does not include the sessionId', () => {
    const description = 'test'
    const sessionId = '5';
    const title = 'hello';
    const wrapper = shallow(<GamePopup desc={description} title={title} sessionId={sessionId} isStart={false}/>);
    const dialogueText = wrapper.find(DialogContentText);
    expect(dialogueText.text()).toBe(description);
  })

  it('Correctly renders the title for the game start popup', () => {
    const title = 'test';
    const wrapper = shallow(<GamePopup title={title} isStart={true}/>);
    const dialogueText = wrapper.find('#alert-dialog-title');
    expect(dialogueText).toHaveLength(1);
    expect(dialogueText.text()).toBe(`${title}`);
  })

  it('Correctly renders the title for the game stop popup', () => {
    const title = 'test';
    const wrapper = shallow(<GamePopup title={title} isStart={false}/>);
    const dialogueText = wrapper.find('#alert-dialog-title');
    expect(dialogueText).toHaveLength(1);
    expect(dialogueText.text()).toBe(`${title}`);
  })

  it('Correctly passes on the toggle function to buttons for the game start popup', () => {
    const toggle = jest.fn();
    const wrapper = shallow(<GamePopup isStart={false} toggle={toggle}/>);
    expect(wrapper.find('#no-button').prop('onClick')).toBe(toggle);
  })

  it('Correctly passes on the toggle function to buttons for the game stop popup', () => {
    const toggle = jest.fn();
    const wrapper = shallow(<GamePopup isStart={true} toggle={toggle}/>);
    expect(wrapper.find('#close-button').prop('onClick')).toBe(toggle);
  })
})
