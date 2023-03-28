"""Stuff

Revision ID: 0fb9217ca6e4
Revises: ffdc0a98111c
Create Date: 2023-03-21 13:28:15.561123

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0fb9217ca6e4'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.create_table('cart',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('items', sa.String(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('items',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('price', sa.Integer(), nullable=False),
    sa.Column('rating', sa.Integer(), nullable=True),
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('review', sa.String(), nullable=False),
    sa.Column('userId', sa.Integer()),
    sa.Column('itemId', sa.Integer()),
    sa.Column('userName', sa.String()),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('firstName', sa.String(length=30)))
        batch_op.add_column(sa.Column('lastName', sa.String(length=30)))

    if environment == "production":
        op.execute(f"ALTER TABLE reviews SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE items SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE cart SET SCHEMA {SCHEMA};")
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.drop_column('lastName')
        batch_op.drop_column('firstName')

  
    op.drop_table('items')
    op.drop_table('cart')
    op.drop_table('reviews')
    # ### end Alembic commands ###