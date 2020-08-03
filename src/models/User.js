import BaseModel from './BaseModel';
import Expense from './Expense';

export default class User extends BaseModel {
  static get tableName() {
    return 'users';
  }
  static get idColumn() {
    return 'id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: [email, password, first_name, last_name],
      properties: {
        id: { type: 'integer' },
        email: { type: 'string', minLength: 1, maxLength: 64 },
        password: { type: 'string', minLength: 6, maxLength: 16 },
        first_name: { type: 'string', minLength: 1, maxLength: 20 },
        last_name: { type: 'string', minLength: 1, maxLength: 30 },
      },
    };
  }
  static get relationMappings() {
    return {
      expenses: {
        relation: Model.HasManyRelation,
        modelClass: Expense,
        join: {
          from: 'users.id',
          to: 'expenses.user_id',
        },
      },
    };
  }
}
