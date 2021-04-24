const INC = "INC";
export const inc = () => {
  return {
    type: INC,
  };
};

const ADD = "ADD";
export const add = (payload) => {
  console.log(payload);
  return {
    type: ADD,
    payload,
  };
};

const DELETE = "DELETE";

export const deletemsg = (id) => {
  console.log(id);
  return {
    type: DELETE,
    id,
  };
};
