import io from 'socket.io-client';
import * as config from '../../config/config.json';
export const socket = io.connect('https://chat-dev-03.herokuapp.com/');