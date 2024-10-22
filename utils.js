import { HANDLER_ID, TOTAL_LENGTH_SIZE } from './constants.js';

export const readHeader = (buffer) => {
  // 빅인디안, 리틀인디안
  return {
    length: buffer.readUInt32BE(0),
    handlerId: buffer.readUInt16BE(TOTAL_LENGTH_SIZE),
  };
};

export const writeHeader = (length, handlerId) => {
  const headerSize = TOTAL_LENGTH_SIZE + HANDLER_ID; // 6
  const buffer = Buffer.alloc(headerSize);
  buffer.writeUInt32BE(length + headerSize, 0);
  buffer.writeUint16BE(handlerId, TOTAL_LENGTH_SIZE);

  return buffer;
};
