import { InstanceState } from '../reducers';
import { ApplicationState } from './ApplicationReducer';

export const applicationSelector = (state: InstanceState): ApplicationState => state.application;
