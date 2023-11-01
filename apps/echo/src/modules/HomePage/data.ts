import { effect, signal } from '@preact/signals-react';
import { ECHO_BASE_URL } from '../../constants';

export const apiData = signal({});

effect(async () => {
  apiData.value = await fetch(`${ECHO_BASE_URL}/api`).then((res) => res.json());
});
