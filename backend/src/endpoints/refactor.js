export default (request, response) => {
  const { code, refactoring } = parseRequest(request);
  response.send(code);
};

const parseRequest = ({ body }) => ({
  code: body.code,
  refactoring: body.refactoring
});
