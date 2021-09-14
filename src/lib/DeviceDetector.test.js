import { render } from '@testing-library/svelte';
import DeviceDetector from './DeviceDetector.svelte';

jest.mock('ua-parser-js', () => ({
  default: jest.fn().mockImplementation(() => ({
    getBrowser: jest.fn(),
    getDevice: jest.fn(),
    getOS: jest.fn(),
  })),
}));

test('shows proper heading when rendered', () => {
  const { container } = render(DeviceDetector);

  expect(container.firstChild).not.toBe(null);
});
