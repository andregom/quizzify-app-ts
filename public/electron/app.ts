// @ts-nocheck
import { app, BrowserWindow } from 'electron';
import Electronmon from 'electronmon';
import Main from './main';

Main.main(app, BrowserWindow, Electronmon);