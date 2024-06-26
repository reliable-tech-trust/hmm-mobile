import {useStore} from '@hooks';
import {GET_MESSAGES, NEW_MESSAGES_COMING, SEND_MESSAGE} from '@store/actions';
import { AppConfig } from '@utils/constants';
import {useCallback, useEffect} from 'react';

const useChatRoom = () => {
  const {dispatch, useSelector} = useStore();
  const {userInfo} = useSelector('auth');
  const {data: messages, isTyping, total} = useSelector('messages');

  useEffect(() => {
    dispatch({type: GET_MESSAGES, payload: {page: 1}});
  }, [dispatch]);

  /**
   * send text message
   */
  const _onSend = useCallback(
    (msg: any) => {
      const {text} = msg[0];
      if (__DEV__ && AppConfig.DEBUG_LOGGING_ENABLED) {
        console.debug("TEXT:", text);
        console.debug("USERINFO:", userInfo);
      }
      dispatch({type: SEND_MESSAGE, payload: {message: text, channel: 'BOT'}});
      dispatch({
        type: NEW_MESSAGES_COMING,
        payload: {
          msg: [
            Object.assign(
              {},
              {
                _id: Math.random().toString(),
                text: text,
                createdAt: new Date(new Date()).toISOString(),
                user: {_id: userInfo.id, avatar: userInfo.avatar, name: userInfo.fullName},
              },
            ),
          ],
        },
      });
    },
    [dispatch, userInfo],
  );

  return {
    isTyping,
    messages,
    total,
    _onSend,
  };
};

export default useChatRoom;
