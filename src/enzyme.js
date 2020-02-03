/* Author: Patrick Conboy
 * Date Created: 1/1/2019
 * Description: This file initializes Enzyme for testing purposes.
 */

import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
export { shallow, mount, render };
export default Enzyme;