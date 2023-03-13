"""This manages form bundling Schema."""

from marshmallow import EXCLUDE, Schema, fields


class SelectedFormSchema(Schema):
    """This class manages form bundling table schema."""

    id = fields.Integer(data_key="id", required=False)
    mapper_id = fields.Integer(data_key="mapperId", required=False)
    path_name = fields.String(data_key="path", required=False)
    rules = fields.List(fields.String(), required=False)
    form_order = fields.Integer(data_key="formOrder", required=False)
    parent_form_id = fields.Str(data_key="parentFormId")

    class Meta:  # pylint: disable=too-few-public-methods
        """Exclude unknown fields in the deserialized output."""

        unknown = EXCLUDE