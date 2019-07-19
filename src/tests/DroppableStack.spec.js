/* eslint-disable no-unused-vars*/
const React = require('react');
/* eslint-enable no-unused-vars*/
const Unexpected = require('unexpected');
const UnexpectedReact = require('unexpected-react');
const TestUtils = require('react-addons-test-utils');
const expect = Unexpected.clone()
  .use(UnexpectedReact);

const DroppableStack = require('../components/DroppableStack/').default;

describe('DroppableStack', () => {
  let renderer;

  beforeEach(() => {
    renderer = TestUtils.createRenderer();
    renderer.render(
      <DroppableStack
        stackName={'ACE-1'}
        index={1}
        handleBeginDragDrop={ function () {} }
        getAvailableMoves={ function () {} }
        moveCards={ function () {} }
        flipCard={ function () {} }
        offsetWidth={100}
        offsetHeight={100}
      >
          <div />
          <div />
      </DroppableStack>
    );
  });

  it('should be a function', () => {
    expect(DroppableStack, 'to be a', 'function');
  });

  it('should render a ReactElement', () => {
    let result = renderer.getRenderOutput();
    return expect(TestUtils.isElement(result), 'to be ok');
  });
  it('should render with its offsetWidth, and offsetHeight', () => {
    return expect(renderer, 'to have rendered',
        <div
          style={ {
            width: '100px',
            height: '100px'
          } }
        >
          <div />
          <div />
        </div>
    );
  });

  it('should render its children', () => {
    let result = renderer.getRenderOutput();
    return expect(result.props.children, 'to have length', 2);
  });
  it('should have class droppable', () => {
    let result = renderer.getRenderOutput();
    return expect(result.props.className, 'to contain', 'droppable');
  });
});
