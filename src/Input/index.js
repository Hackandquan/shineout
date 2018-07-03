import { compose } from '../utils/func'
import inputable from '../Form/inputable'
import Input from './Input'
import Number from './Number'
import wrapper from './wrapper'
import Group from './Group'

const wrap = compose(wrapper({}), inputable({ delay: 400, imeEvent: true }))

const exports = wrap(Input)
exports.Group = wrapper({ tag: 'div', isGroup: true })(Group)
exports.Number = compose(wrapper({}), inputable({ delay: 0, imeEvent: true }))(Number)

export default exports
