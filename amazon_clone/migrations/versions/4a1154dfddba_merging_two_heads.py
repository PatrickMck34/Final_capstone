"""merging two heads

Revision ID: 4a1154dfddba
Revises: faf3ebfbe667, 14b381919e11
Create Date: 2023-03-29 14:00:24.635764

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4a1154dfddba'
down_revision = ('faf3ebfbe667', '14b381919e11')
branch_labels = None
depends_on = None


def upgrade():
    pass


def downgrade():
    pass
