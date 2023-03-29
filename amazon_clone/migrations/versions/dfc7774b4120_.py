"""empty message

Revision ID: dfc7774b4120
Revises: 
Create Date: 2023-03-29 14:13:01.072740

"""
from alembic import op
import sqlalchemy as sa
import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

# revision identifiers, used by Alembic.
revision = 'dfc7774b4120'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
        if environment == "production":
            op.execute(f"ALTER TABLE users SET SCHEMA {SCHEMA};")
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )

    op.create_table('cart',
        if environment == "production":
            op.execute(f"ALTER TABLE cart SET SCHEMA {SCHEMA};")
    sa.Column('_id', sa.Integer(), nullable=False),
    sa.Column('items', sa.String(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('_id')
    )
    op.create_table('items',
        if environment == "production":
            op.execute(f"ALTER TABLE items SET SCHEMA {SCHEMA};")
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('price', sa.Integer(), nullable=False),
    sa.Column('description', sa.String(length=200), nullable=True),
    sa.Column('rating', sa.Integer(), nullable=True),
    sa.Column('imageUrl', sa.String(length=100), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )





    op.create_table('reviews',
        if environment == "production":
            op.execute(f"ALTER TABLE reviews SET SCHEMA {SCHEMA};")
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('review', sa.String(length=200), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('item_id', sa.Integer(), nullable=True),
    sa.Column('user_name', sa.String(length=30), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('reviews')
    op.drop_table('items')
    op.drop_table('users')
    op.drop_table('cart')
    # ### end Alembic commands ###
